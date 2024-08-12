import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '62px'
const BOARD_BAR_HEIGHT = '64px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '32px'
const COLUMN_FOOTER_HEIGHT = '38px'

// Create a theme instance.
const theme = extendTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT,
        columnHeaderHeight: COLUMN_HEADER_HEIGHT,
        columnFooterHeight: COLUMN_FOOTER_HEIGHT
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
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '::-webkit-scrollbar': {
                        borderRadius: 0,
                        width: '8px',
                        height: '8px'
                    },
                    '*::-webkit-scrollbar': {
                        borderRadius: 0,
                        width: '8px',
                        height: '8px'
                    },
                    ' ::-webkit-scrollbar-thumb': {
                        borderRadius: '4px',
                        backgroundColor: 'rgba(22, 24, 35, 0.06)'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        borderRadius: '4px',
                        backgroundColor: '#ced0da'
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        cursor: 'pointer',
                        backgroundColor: '#bfc2cf'
                    },
                    '::-webkit-scrollbar-track': {
                        borderRadius: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    },
                    '*::-webkit-scrollbar-track': {
                        borderRadius: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }
                }
            }
        }
    }
})

export default theme
