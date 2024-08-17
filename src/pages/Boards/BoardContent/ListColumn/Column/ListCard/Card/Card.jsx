import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Card = ({ card }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: card._id, data: { ...card } })

    const dndKitCardStyles = {
        touchAction: 'none',
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid',
        borderColor: isDragging ? '#3498db' : 'transparent'
    }

    const shouldShowCardAction = () => {
        return (
            !!card?.memberIds?.length ||
            !!card?.comments?.length ||
            !!card?.attachments?.length
        )
    }

    return (
        <MuiCard
            ref={setNodeRef}
            style={dndKitCardStyles}
            {...attributes}
            {...listeners}
            sx={{
                cursor: 'pointer',
                boxShadow: 'none'
            }}
        >
            {card.cover && (
                <CardMedia
                    sx={{
                        height: 140
                    }}
                    image={card.cover}
                    title="green iguana"
                />
            )}
            <CardContent sx={{ padding: 1, '&:last-child': { padding: 1 } }}>
                <Typography>{card.title}</Typography>
            </CardContent>
            {shouldShowCardAction() && (
                <CardActions>
                    {card?.memberIds?.length && (
                        <Button size="small" startIcon={<GroupIcon />}>
                            {card.memberIds.length}
                        </Button>
                    )}
                    {card?.comments?.length && (
                        <Button size="small" startIcon={<ModeCommentIcon />}>
                            {card.comments.length}
                        </Button>
                    )}
                    {card?.attachments?.length && (
                        <Button size="small" startIcon={<AttachmentIcon />}>
                            {card.attachments.length}
                        </Button>
                    )}
                </CardActions>
            )}
        </MuiCard>
    )
}

export default Card
