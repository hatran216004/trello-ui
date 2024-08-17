import Box from '@mui/material/Box'
import Card from './Card'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

const ListCard = ({ cards }) => {
    return (
        <SortableContext
            items={cards?.map((card) => card._id)}
            strategy={verticalListSortingStrategy}
        >
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
        </SortableContext>
    )
}

export default ListCard
