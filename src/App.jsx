import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add'

function App() {
  return (
    <>
      <div>eqwe</div>
      <AddIcon />
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
