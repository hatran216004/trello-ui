import { useState } from 'react'

import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import AddCardIcon from '@mui/icons-material/AddCard'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import DragHandleIcon from '@mui/icons-material/DragHandle'

import MediaCard from '~/components/MediaCard'

const COLUMN_HEADER_HEIGHT = '32px'
const COLUMN_FOOTER_HEIGHT = '38px'

const BoardContent = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box
            sx={{
                padding: 2,
                height: (theme) => theme.trello.boardContentHeight,
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#22344e' : 'primary.dark'
            }}
        >
            <Box
                sx={{
                    padding: '8px 0',
                    width: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '6px',
                    color: 'primary.dark',
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#000' : '#dddceb'
                }}
            >
                <Box
                    sx={{
                        padding: '0 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            height: COLUMN_HEADER_HEIGHT,
                            color: (theme) => theme.palette.text.primary,
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        Tittle
                    </Typography>
                    <Box>
                        <Tooltip title="More option">
                            <KeyboardArrowDownIcon
                                id="basic-column-dropdown"
                                aria-controls={
                                    open ? 'basic-menu-workspaces' : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{
                                    color: (theme) =>
                                        theme.palette.text.primary,
                                    cursor: 'pointer'
                                }}
                            />
                        </Tooltip>
                        <Menu
                            id="basic-menu-workspaces"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-column-dropdown'
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <AddCardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add new card</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCut fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Cut</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopyIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPasteIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Archive this column</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <DeleteOutlineIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Delete this column</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
                {/* List  */}
                <Box
                    sx={{
                        margin: '8px 6px',
                        padding: '0 6px',
                        maxHeight: 'calc(100vh - 255px)',
                        overflowY: 'auto'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: '0 12px',
                        height: COLUMN_FOOTER_HEIGHT,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button
                        startIcon={<AddCardIcon />}
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '100%',
                            cursor: 'pointer'
                        }}
                    >
                        Add new card
                    </Button>
                    <Tooltip title="Drag to move">
                        <DragHandleIcon
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                                cursor: 'pointer'
                            }}
                        />
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default BoardContent
