import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const MediaCard = () => {
    return (
        <Card
            sx={{
                cursor: 'pointer',
                boxShadow: 'none'
            }}
        >
            <CardMedia
                sx={{ height: 140 }}
                image="https://i.pinimg.com/564x/01/2a/2c/012a2ce3c1ce121384a9299d34c0d6a0.jpg"
                title="green iguana"
            />
            <CardContent sx={{ padding: 1, '&:last-child': { padding: 1 } }}>
                <Typography>Lizard</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" startIcon={<GroupIcon />}>
                    20
                </Button>
                <Button size="small" startIcon={<ModeCommentIcon />}>
                    13
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                    12
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediaCard
