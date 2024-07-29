import { grey, blue } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
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
          secondary: grey[500]
        }
      }
    }
  }
})

export default theme
