import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

const MENU_STYLES = {
    paddingX: 2,
    color: 'primary.main',
    '&:hover': {
        bgcolor: 'rgba(25, 118, 210, 0.2)'
    },
    '& .MuiSvgIcon-root': { color: 'primary.main' }
}

const BoardBar = () => {
    return (
        <nav>
            <Box
                sx={{
                    paddingX: 2,
                    height: (theme) => theme.trello.boardBarHeight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#22344e' : '#fff'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Chip
                        icon={<DashboardIcon />}
                        label="With Icon"
                        clickable
                        sx={MENU_STYLES}
                    />
                    <Chip
                        icon={<VpnLockIcon />}
                        label="Public/Private workspace"
                        clickable
                        sx={MENU_STYLES}
                    />
                    <Chip
                        icon={<AddToDriveIcon />}
                        label="Add to google drive"
                        clickable
                        sx={MENU_STYLES}
                    />
                    <Chip
                        icon={<BoltIcon />}
                        label="Automation"
                        clickable
                        sx={MENU_STYLES}
                    />
                    <Chip
                        icon={<FilterAltIcon />}
                        label="Filter"
                        clickable
                        sx={MENU_STYLES}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Button variant="outlined" startIcon={<PersonAddAltIcon />}>
                        Invite
                    </Button>
                    <AvatarGroup
                        max={4}
                        sx={{
                            '& .MuiAvatar-root': {
                                width: 34,
                                height: 34
                            }
                        }}
                    >
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/564x/e9/8d/91/e98d9111d9d7494247de54fd52a240a8.jpg"
                            />
                        </Tooltip>
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/736x/ff/11/34/ff113401c214ca8f7e4dd91351a032a9.jpg"
                            />
                        </Tooltip>
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/736x/e1/8c/21/e18c21bc78a73dc287c437905509f2c0.jpg"
                            />
                        </Tooltip>
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/736x/c9/2a/0c/c92a0ccf5f85c2fbb2e4c9d4f8c6f7c8.jpg"
                            />
                        </Tooltip>
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/736x/38/8a/54/388a5427307dc2285339c86ffc6346c5.jpg"
                            />
                        </Tooltip>
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/736x/e6/a1/41/e6a1412982af05fdbacf4b52ce592e14.jpg"
                            />
                        </Tooltip>
                        <Tooltip title="Ha Tran">
                            <Avatar
                                alt="Ha Tran"
                                src="https://i.pinimg.com/736x/c3/58/44/c35844e91db04954679d91c11ba41853.jpg"
                            />
                        </Tooltip>
                    </AvatarGroup>
                </Box>
            </Box>
        </nav>
    )
}

export default BoardBar
