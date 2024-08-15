import Box from '@mui/material/Box'
import Column from './Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import {
    SortableContext,
    horizontalListSortingStrategy
} from '@dnd-kit/sortable'

/*
    SortableContext yêu cầu items là một mảng chứa các primitive value ['id-1', 'id-2']
    Nếu không vẫn kéo thả đc nhưng ko có animation
*/

const ListColumn = ({ columns }) => {
    return (
        <SortableContext
            items={columns?.map((column) => column._id)}
            strategy={horizontalListSortingStrategy}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    overflowX: 'auto'
                }}
            >
                {columns.map((column) => (
                    <Column key={column._id} column={column} />
                ))}
                <Button
                    startIcon={<NoteAddIcon />}
                    sx={{
                        padding: '8px 0',
                        minWidth: '148px',
                        bgcolor: '#ffffff3d',
                        color: '#fff',
                        '&:hover': {
                            bgcolor: '#ffffff3d',
                            opacity: '0.9'
                        }
                    }}
                >
                    Add Column
                </Button>
            </Box>
        </SortableContext>
    )
}

export default ListColumn
