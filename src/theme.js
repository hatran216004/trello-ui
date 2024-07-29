import { grey, blue } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '62px',
    boardBarHeight: '64px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: blue,
        text: {
          primary: grey[900],
          secondary: grey[800]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#000'
        },
        text: {
          primary: '#fff',
          secondary: '#fff'
        }
      }
    }
  }
})

export default theme
