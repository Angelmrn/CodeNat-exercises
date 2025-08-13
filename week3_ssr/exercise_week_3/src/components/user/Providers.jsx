import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
  { field: 'business_name', headerName: 'Business Name', flex: 1, minWidth: 120 },
  { field: 'email', headerName: 'Email', flex: 2, minWidth: 150 },
  { field: 'phone', headerName: 'Phone', flex: 1, minWidth: 100 },

];


export default function Providers() {
  const router = useRouter();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch("/api/auth/provider", {
          method: "GET",
        });
        if (!response.ok) throw new Error("Failed to fetch providers");
        const data = await response.json();
        // make sure data is an array of providers
        setRows(Array.isArray(data) ? data : data.results || []);
        // Store providers in localStorage 
        localStorage.setItem("providers", JSON.stringify(Array.isArray(data)? data : data.results || []));
      } catch (error) {
        console.error("Error fetching providers:", error);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProviders();
  }, []);

  const handleCreateProvider = () => {
    router.push('/provider/create');
  };

  const handleProviderClick = (params) => {
    router.push(`/provider/${params.id}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleCreateProvider}
        >
          Add New Provider
        </Button>
      </Box>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {loading ? (
          <Box sx={{ p: 3, textAlign: 'center' }}>Loading...</Box>
        ) : rows.length === 0 ? (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            No Providers found. Create your first provider!
          </Box>
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            onRowClick={handleProviderClick}
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