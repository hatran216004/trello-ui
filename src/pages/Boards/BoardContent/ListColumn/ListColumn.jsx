import Box from '@mui/material/Box'
import Column from './Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

const ListColumn = ({ columns }) => {
    return (
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
    )
}

export default ListColumn
