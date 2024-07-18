import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'

function App() {
  return (
    <>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
