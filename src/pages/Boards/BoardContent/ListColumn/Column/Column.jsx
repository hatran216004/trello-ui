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
import ListCard from './ListCard'

const Column = () => {
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
                padding: '8px 0',
                width: 300,
                display: 'flex',
                flexShrink: '0',
                flexDirection: 'column',
                borderRadius: '6px',
                color: 'primary.dark',
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#000' : '#dddceb'
            }}
        >
            {/* Card header */}
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
                        height: (theme) => theme.trello.columnHeaderHeight,
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
                                color: (theme) => theme.palette.text.primary,
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
            <ListCard />
            {/* Card footer */}
            <Box
                sx={{
                    padding: '0 12px',
                    height: (theme) => theme.trello.columnFooterHeight,
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
    )
}

export default Column
