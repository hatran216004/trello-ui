import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Profile from './Menu/Profile'

import SvgIcon from '@mui/material/SvgIcon'
import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

const AppBar = () => {
    return (
        <header>
            <Box
                px={2}
                sx={{
                    height: (theme) => theme.trello.appBarHeight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AppsIcon sx={{ color: 'primary.main' }} />
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                        <SvgIcon
                            component={TrelloIcon}
                            inheritViewBox
                            sx={{
                                color: 'primary.main',
                                width: '22px',
                                height: '22px'
                            }}
                        />
                        <Typography
                            variant="span"
                            sx={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                color: 'primary.main'
                            }}
                        >
                            Trello
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1 }}>
                        <Workspaces />
                        <Recent />
                        <Starred />
                        <Templates />
                        <Button
                            variant="outlined"
                            endIcon={<AddCircleOutlineIcon />}
                        >
                            Create
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        id="outlined-search"
                        label="Search..."
                        type="search"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon
                                        sx={{ color: 'primary.main' }}
                                    />
                                </InputAdornment>
                            )
                        }}
                    />
                    <ModeSelect />
                    <Tooltip title="Notification">
                        <Badge
                            badgeContent={4}
                            color="primary"
                            sx={{ marginLeft: 1, cursor: 'pointer' }}
                        >
                            <NotificationsNoneIcon
                                sx={{ color: 'primary.main' }}
                            />
                        </Badge>
                    </Tooltip>
                    <Tooltip title="Help">
                        <HelpOutlineIcon
                            sx={{
                                marginLeft: 2,
                                color: 'primary.main',
                                cursor: 'pointer'
                            }}
                        />
                    </Tooltip>
                    <Profile />
                </Box>
            </Box>
        </header>
    )
}

export default AppBar
