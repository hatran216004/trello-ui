import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#556cd6'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#fff'
        }
      }
    }
  }
})

export default theme
