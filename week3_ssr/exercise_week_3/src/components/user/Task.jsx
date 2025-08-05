import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
  { field: 'taskName', headerName: 'Task Name', flex: 1, minWidth: 120 },
  { field: 'taskDescription', headerName: 'Description', flex: 2, minWidth: 150 },

];

export default function DataTable() {
  const router = useRouter();
  const [rows, setRows] = React.useState([]);
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  React.useEffect(() => {
    const loadTasks = () => {
      try {
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setRows(savedTasks);
      } catch (error) {
        console.error("Error loading tasks:", error);
        setRows([]);
      }
    };
    loadTasks();

    const handleStorageChange = (event) => {
      if(event.key == 'tasks'){
        loadTasks();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return() => {
      window.removeEventListener('storage', handleStorageChange);
    };
  },[]);

  const handleCreateTask = () => {
    router.push('provider/create');
  };

  const handleTaskClick = (params) => {
    router.push(`/provider/${params.id}`);
  }

  return (
  <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleCreateTask}
        >
          Add New Task
        </Button>
      </Box>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {rows.length === 0 ? (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            No tasks found. Create your first task!
          </Box>
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection
            onRowClick={handleTaskClick}
            sx={{
              border: 0,
              '& .MuiDataGrid-cell': {
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              },
            }}
          />
        )}
      </Paper>
    </Box>
  );
}