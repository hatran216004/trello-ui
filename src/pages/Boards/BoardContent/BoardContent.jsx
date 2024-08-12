import Box from '@mui/material/Box'
import ListColumn from './ListColumn'

const BoardContent = () => {
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
            <ListColumn />
        </Box>
    )
}

export default BoardContent
