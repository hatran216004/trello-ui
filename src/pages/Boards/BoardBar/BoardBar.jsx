import Box from '@mui/material/Box'

const BoardBar = () => {
  return (
    <nav>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          height: (theme) => theme.trello.boardBarHeight
        }}
      >
        Board bar
      </Box>
    </nav>
  )
}

export default BoardBar
