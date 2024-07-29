import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
      }}
    >
      Content
    </Box>
  )
}

export default BoardContent
