import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ListColumn from './ListColumn'
import { mapOrder } from '~/utils/sort'
import {
    DndContext,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core'

import { arrayMove } from '@dnd-kit/sortable'

const BoardContent = ({ board }) => {
    const [orderedColumns, setOrderedColumns] = useState([])

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

    const handleDragEnd = (event) => {
        const { active, over } = event
        console.log(event)

        if (!over) return
        // Phẩn tử sau khi kéo khác phần tử trc khi kéo
        if (active.id !== over.id) {
            // Lấy vị trí active
            const oldIndex = orderedColumns.findIndex(
                (item) => item._id === active.id
            )
            // Lấy vị trí over
            const newIndex = orderedColumns.findIndex(
                (item) => item._id === over.id
            )
            // arrayMove sắp xếp array sau khi kéo thả
            const dndOrderedColumns = arrayMove(
                orderedColumns,
                oldIndex,
                newIndex
            )
            const dndOrderedColumnsIds = dndOrderedColumns.map(
                (item) => item._id
            )
            // call api
            setOrderedColumns(dndOrderedColumns)
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
            </Box>
        </DndContext>
    )
}

export default BoardContent
