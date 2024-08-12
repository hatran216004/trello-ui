import Box from '@mui/material/Box'
import Card from './Card'

const ListCard = () => {
    return (
        <Box
            sx={{
                margin: '8px 6px',
                padding: '0 6px',
                maxHeight: 'calc(100vh - 264px)',
                overflowY: 'auto'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}
            >
                <Card />
                <Card temporaryHideMedia />
                <Card temporaryHideMedia />
                <Card temporaryHideMedia />
                <Card temporaryHideMedia />
                <Card temporaryHideMedia />
                <Card temporaryHideMedia />
                <Card temporaryHideMedia />
            </Box>
        </Box>
    )
}

export default ListCard
