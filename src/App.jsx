import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ModeSelect from './components/ModeSelect'

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <Typography variant="body2" color="text.secondary">
        h1. Heading
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
