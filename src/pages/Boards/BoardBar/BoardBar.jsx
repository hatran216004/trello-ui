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
    bgcolor: 'transparent',
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
                    height: (theme) => theme.trello.boardBarHeight,
                    paddingX: 2,
                    borderTop: '2px solid blue',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1
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
                                src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/335849762_647057723892150_2740165209836350945_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF9yJp0S9wtQK4a-rJaA32vUN3YSYbt2CpQ3dhJhu3YKtYoh2fuWZMbcfc6xNljlVig5_krn99ByVBrjXRH5bds&_nc_ohc=KBAjOmKgdZwQ7kNvgGTwt1a&_nc_ht=scontent.fsgn19-1.fna&oh=00_AYB9z5goamHRJu-cahYDuv6T4vUmT6rvhsOlE_IUZOUa7g&oe=66B9136D"
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
