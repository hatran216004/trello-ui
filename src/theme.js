import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
    trello: {
        appBarHeight: '62px',
        boardBarHeight: '64px'
    },
    colorSchemes: {
        // light: {
        //   palette: {
        //     primary: blue,
        //     text: {
        //       primary: grey[900],
        //       secondary: grey[800]
        //     }
        //   }
        // },
        // dark: {
        //   palette: {
        //     primary: {
        //       main: '#000'
        //     },
        //     text: {
        //       primary: '#fff',
        //       secondary: '#fff'
        //     }
        //   }
        // }
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'initial'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem'
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.light
                    },
                    '&:hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                        }
                    }
                })
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '::-webkit-scrollbar': {
                        width: '10px'
                    },
                    '::-webkit-scrollbar-thumb': {
                        background: '#bdc3c7',
                        borderRadius: '999px'
                    }
                }
            }
        }
    }
})

export default theme
