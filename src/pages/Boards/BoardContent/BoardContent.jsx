import Box from '@mui/material/Box'
import ListColumn from './ListColumn'
import { mapOrder } from '~/utils/sort'

const BoardContent = ({ board }) => {
    const orderedColumns = mapOrder(
        board?.columns,
        board?.columnOrderIds,
        '_id'
    )
    return (
        <Box
            sx={{
                padding: '16px',
                paddingBottom: '6px',
                height: (theme) => theme.trello.boardContentHeight,
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#22344e' : 'primary.dark'
            }}
        >
            <ListColumn columns={orderedColumns} />
        </Box>
    )
}

export default BoardContent
