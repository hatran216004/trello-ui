import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn'
import { mapOrder } from '~/utils/sort'
import {
    DndContext,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    closestCorners
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { DragOverlay } from '@dnd-kit/core'
import { cloneDeep } from 'lodash'

import Column from './ListColumn/Column'
import Card from './ListColumn/Column/ListCard/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
    CARD: 'ACTIVE_DRAG_CARD',
    COLUMN: 'ACTIVE_DRAG_COLUMN'
}

const BoardContent = ({ board }) => {
    const [orderedColumns, setOrderedColumns] = useState([])
    // cùng 1 thời điểm chỉ kéo thả 1 card/column
    const [activeDragItemId, setActiveDragItemId] = useState(null)
    const [activeDragItemType, setActiveDragItemType] = useState(null)
    const [activeDragItemData, setActiveDragItemData] = useState(null)
    const [oldDataColumn, setOldDataColumn] = useState(null) // lưu lại data column cũ khi bắt đầu kéo card
    // kết hợp sử dụng MouseSensor và TouchSensor
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: { distance: 10 }
    })
    const touchSensor = useSensor(TouchSensor, {
        // Nhấn giữ 250ms và dung sai cảm ứng (di chuyển/chênh lệch 5px) thì mới kích hoạt event
        activationConstraint: { delay: 250, tolerance: 5 }
    })
    const sensors = useSensors(mouseSensor, touchSensor)

    useEffect(() => {
        const orderedColumns = mapOrder(
            board?.columns,
            board?.columnOrderIds,
            '_id'
        )
        setOrderedColumns(orderedColumns)
    }, [board])

    const findColumnByCardId = (cardId) =>
        orderedColumns.find((column) =>
            column.cards.map((card) => card._id).includes(cardId)
        )

    const handleDragStart = (event) => {
        const { active } = event
        setActiveDragItemId(active?.id)
        setActiveDragItemType(
            active?.data?.current?.columnId
                ? ACTIVE_DRAG_ITEM_TYPE.CARD
                : ACTIVE_DRAG_ITEM_TYPE.COLUMN
        )
        setActiveDragItemData(active?.data?.current)

        // Nếu đang kéo card => lưu data column card đang kéo
        if (active?.data?.current?.columnId) {
            setOldDataColumn(findColumnByCardId(active?.id))
        }
    }

    // Xử lý trong quá trình kéo thả card
    const handleDragOver = (event) => {
        // chỉ xử lý kéo thả card
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
        const { active, over } = event

        if (!active || !over) return

        const {
            id: activeDraggingCardId,
            data: { current: activeDraggingCardData }
        } = active

        const { id: overCardId } = over
        // B1: Tìm cột chứa phần tử đang kéo và cột chứa phần tử ở vị trí thả theo CardId
        const activeColumn = findColumnByCardId(activeDraggingCardId)
        const overColumn = findColumnByCardId(overCardId)

        if (!activeColumn || !overColumn) return

        // B2: Chỉ xử lý khi kéo card qua 2 column khác nhau, nếu card vẫn trong chính column ban đầu thì không làm gì
        if (activeColumn._id !== overColumn._id) {
            // B3: Tìm index overCard trong column đích(nơi activeCard sắp được thả)
            setOrderedColumns((prevColumns) => {
                const OverCardIndex = overColumn.cards.findIndex(
                    (card) => card._id === overCardId
                )

                // B4: Logic tính toán vị trí mới cho activeCard(trên hoặc dưới overCard)
                let newCardIndex
                const isBelowOverItem =
                    active.rect.current.translated &&
                    active.rect.current.translated.top >
                        over.rect.top + over.rect.height

                const modifier = isBelowOverItem ? 1 : 0

                newCardIndex =
                    OverCardIndex >= 0
                        ? OverCardIndex + modifier
                        : overColumn.cards.length + 1

                // B5: Clone mảng pre orderedColumns để xử lý data rồi return - cập nhât orderedColumns mới
                const nextColumns = cloneDeep(prevColumns)
                const newActiveColumn = nextColumns.find(
                    (column) => column._id === activeColumn._id
                )
                const newOverColumn = nextColumns.find(
                    (column) => column._id === overColumn._id
                )

                // B6: Xóa card ở column active, cập nhật mảng cardOrderIds
                if (newActiveColumn) {
                    newActiveColumn.cards = newActiveColumn.cards.filter(
                        (card) => card._id !== activeDraggingCardId
                    )
                    // cập nhật lại cardOrderIds sau khi xóa card được active ở column active
                    newActiveColumn.cardOrderIds = newActiveColumn.cards.map(
                        (card) => card._id
                    )
                }
                if (newOverColumn) {
                    // B7: Kiểm tra xem card đang kéo có tồn tại ở overcoLumn chưa, nếu có thì cần xóa nó trước
                    // (tránh việc có hai bản sao của cùng một card trong cùng một cột)
                    newOverColumn.cards = newOverColumn.cards.filter(
                        (card) => card._id !== activeDraggingCardId
                    )
                    // B8: Thêm card đang kéo vào overcolumn theo index mới
                    newOverColumn.cards = newOverColumn.cards.toSpliced(
                        newCardIndex,
                        0,
                        activeDraggingCardData
                    )
                    newOverColumn.cardOrderIds = newOverColumn.cards.map(
                        (card) => card._id
                    )
                }
                return nextColumns
            })
        }
    }

    const handleDragEnd = (event) => {
        const { active, over } = event
        if (!active || !over) return

        // xử lý kéo thả card
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
            const {
                id: activeDraggingCardId,
                data: { current: activeDraggingCardData }
            } = active

            const { id: overCardId } = over
            const overColumn = findColumnByCardId(overCardId)

            if (oldDataColumn._id !== overColumn._id) {
                // kéo thả card khác column
            } else {
                // kéo thả card cùng 1 column
                const oldCardIndex = oldDataColumn.cards.findIndex(
                    (card) => card._id === activeDragItemId
                )
                const newCardIndex = oldDataColumn.cards.findIndex(
                    (card) => card._id === overCardId
                )

                const dndOrderedCards = arrayMove(
                    oldDataColumn.cards,
                    oldCardIndex,
                    newCardIndex
                )

                // call api
                setOrderedColumns((prevColumns) => {
                    const cloneOrderedColumns = cloneDeep(prevColumns)
                    const targetColumn = cloneOrderedColumns.find(
                        (column) => column._id === oldDataColumn._id
                    )
                    targetColumn.cards = dndOrderedCards
                    targetColumn.cardOrderIds = dndOrderedCards.map(
                        (card) => card._id
                    )
                    return cloneOrderedColumns
                })
            }
        }

        // xử lý kéo thả column
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            // Phẩn tử sau kéo khác phần tử đích
            if (active.id !== over.id) {
                // Lấy vị trí active
                const oldColumnIndex = orderedColumns.findIndex(
                    (item) => item._id === active.id
                )
                // Lấy vị trí over
                const newIndex = orderedColumns.findIndex(
                    (item) => item._id === over.id
                )
                // arrayMove sắp xếp array sau khi kéo thả
                const dndOrderedColumns = arrayMove(
                    orderedColumns,
                    oldColumnIndex,
                    newIndex
                )
                const dndOrderedColumnsIds = dndOrderedColumns.map(
                    (column) => column._id
                )
                // call api
                setOrderedColumns(dndOrderedColumns)
            }
        }
        setActiveDragItemId(null)
        setActiveDragItemType(null)
        setActiveDragItemData(null)
        setOldDataColumn(null)
    }

    return (
        <DndContext
            collisionDetection={closestCorners} // phát hiện va chạm ở góc phần tử (xử lý khi kéo card với cover lớn)
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            sensors={sensors} // cảm biến
        >
            <Box
                sx={{
                    padding: '16px',
                    paddingBottom: '6px',
                    height: (theme) => theme.trello.boardContentHeight,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark'
                            ? '#22344e'
                            : 'primary.dark'
                }}
            >
                <ListColumn columns={orderedColumns} />
                <DragOverlay dropAnimation={{ duration: 250, easing: 'ease' }}>
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
                        <Column column={activeDragItemData} />
                    ) : (
                        <Card card={activeDragItemData} />
                    )}
                </DragOverlay>
            </Box>
        </DndContext>
    )
}

export default BoardContent
