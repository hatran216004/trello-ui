import Container from '@mui/material/Container'
import ModeSelect from './components/ModeSelect'
import Box from '@mui/material/Box'

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <header>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            height: (theme) => theme.trello.appBarHeight,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ModeSelect />
        </Box>
      </header>
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
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
        }}
      >
        Content
      </Box>
    </Container>
  )
}

export default App
