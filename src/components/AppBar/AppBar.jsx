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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              sx={{ color: 'primary.main' }}
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
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Outlined</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            size="small"
          />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge
              badgeContent={4}
              color="primary"
              sx={{ marginLeft: 1, cursor: 'pointer' }}
            >
              <NotificationsNoneIcon color="primary.main" />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon
              color="primary.main"
              sx={{ marginLeft: 2, cursor: 'pointer' }}
            />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </header>
  )
}

export default AppBar
