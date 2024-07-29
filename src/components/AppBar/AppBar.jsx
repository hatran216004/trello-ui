import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'

const AppBar = () => {
  return (
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
  )
}

export default AppBar
