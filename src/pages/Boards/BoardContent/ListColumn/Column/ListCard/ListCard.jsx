import Box from '@mui/material/Box'
import Card from './Card'

const ListCard = ({ cards }) => {
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
                {cards?.map((card) => {
                    return <Card key={card._id} card={card} />
                })}
            </Box>
        </Box>
    )
}

export default ListCard
