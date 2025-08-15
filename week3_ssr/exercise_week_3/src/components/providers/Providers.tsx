"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useRouter } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';
import {Typography, Tooltip, Alert, TextField, DialogContentText, DialogTitle, 
  DialogContent, DialogActions, Dialog, Button, Box, Paper} from '@mui/material';


interface Provider {
  id: number;
  business_name: string;
  email: string;
  phone: string;
  is_archived: boolean;
}

export default function Providers() {
  const router = useRouter();
  const [rows, setRows] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [currentProvider, setCurrentProvider] = useState<Provider | null>(null);
  const [editForm, setEditForm] = useState({
    business_name: '',
    email: '',
    phone: ''
  });
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [error, setError] = useState<Error | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
    { field: 'business_name', headerName: 'Business Name', flex: 1, minWidth: 120 },
    { field: 'email', headerName: 'Email', flex: 2, minWidth: 150 },
    { field: 'phone', headerName: 'Phone', flex: 1, minWidth: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          <Tooltip title="Edit">
            <IconButton 
              onClick={(e) => {
                e.stopPropagation();
                handleEditClick(params.row as Provider);
              }}
              size="small"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Archive">
            <IconButton 
              onClick={(e) => {
                e.stopPropagation();
                handleArchiveClick(params.row as Provider);
              }}
              size="small"
            >
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  const fetchProviders = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/auth/provider", {
        method: "GET",
        cache: "no-cache",
      });

      if (!response.ok){
        const errorData = await response.json();
        const errorMessage = errorData.detail || 'Failed to fetch providers';

        if(response.status === 401){
          throw new Error("Authentication required. Please log in again.");
        } else if (response.status === 403) {
          throw new Error("You don't have permission to view providers.");
        } else if (response.status === 404) {
          throw new Error("Provider resource not found.");
        } else if (response.status >= 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error(errorMessage);
        }
      }

      const data = await response.json();
      // make sure data is an array of providers
      const providersData = Array.isArray(data) ? data : data.results || [];
      const activeProviders = providersData.filter((p: Provider) => !p.is_archived);
      
      setRows(activeProviders);
      // Store providers in localStorage 
      localStorage.setItem("providers", JSON.stringify(providersData));
    } catch (error) {
      console.error("Error fetching providers:", error);
      setRows([]);
      // Save the error to show in Next.js error.tsx
      setError(error instanceof Error ? error : new Error(String(error)));
      
      if (!(error instanceof Error) || 
          (!error.message.includes("Authentication required") && 
           !error.message.includes("Server error"))) {
        setNotification({
          open: true,
          message: error instanceof Error ? error.message : "Failed to load providers",
          severity: 'error'
        });
      }

    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProviders();
  }, [fetchProviders]);

  useEffect(() => {
    if (error) {
      // Lanzar cualquier error para que lo maneje error.tsx
      // O puedes ser selectivo:
      if (
        error.message.includes("Authentication required") || 
        error.message.includes("Server error") ||
        error.message.includes("permission")
      ) {
        throw error; // Esto activará el error.tsx global
      }
    }
  }, [error]);

  const handleEditClick = (provider: Provider) => {
    setCurrentProvider(provider);
    setEditForm({
      business_name: provider.business_name,
      email: provider.email || '',
      phone: provider.phone || ''
    });
    setEditOpen(true);
  };

  const handleArchiveClick = (provider: Provider) => {
    setCurrentProvider(provider);
    setArchiveOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setCurrentProvider(null);
  };

  const handleArchiveClose = () => {
    setArchiveOpen(false);
    setCurrentProvider(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleArchiveConfirm = async () => {
    try {
      if (!currentProvider) return;
      
      const response = await fetch(`/api/auth/provider/${currentProvider.id}/archive`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Provider not found or already archived");
        } else if (response.status === 401) {
          throw new Error("Authentication required. Please log in again.");
        } else {
          throw new Error(data.detail || 'Failed to archive provider');
        }
      }
      router.refresh();

      // Remove the archived provider from the visible list
      setRows(prevRows => prevRows.filter(row => row.id !== currentProvider.id));

      // Update localStorage
      const providers = JSON.parse(localStorage.getItem('providers') || '[]');
      const updatedProviders = providers.map((p: Provider) => 
        p.id === currentProvider.id ? { ...p, is_archived: true } : p
      );
      localStorage.setItem('providers', JSON.stringify(updatedProviders));

      setNotification({
        open: true,
        message: 'Provider archived successfully',
        severity: 'success'
      });

      handleArchiveClose();
    } catch (error: any) {
      console.error('Error archiving provider:', error);
      if(error.message.includes("Authentication required")){
        throw error;
      }
      setNotification({
        open: true,
        message: error.message || 'Failed to archive provider',
        severity: 'error'
      });
    }
  };

  const handleEditSubmit = async () => {
    // Validaciones
    if (!editForm.business_name || !editForm.email || !editForm.phone) {
      setNotification({
        open: true,
        message: 'All fields are required',
        severity: 'error'
      });
      return;
    }

    if (!emailRegex.test(editForm.email)) {
      setNotification({
        open: true,
        message: 'Invalid email format',
        severity: 'error'
      });
      return;
    }

    try {
      if (!currentProvider) return;
      
      const response = await fetch(`/api/auth/provider/${currentProvider.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editForm)
      });

      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Provider not found");
        } else if (response.status === 401) {
          throw new Error("Authentication required. Please log in again.");
        } else {
          throw new Error(data.detail || 'Failed to update provider');
        }
      }
      router.refresh();

      // Upload changes
      setRows(prevRows => 
        prevRows.map(row => 
          row.id === currentProvider.id 
            ? { ...row, ...editForm } 
            : row
        )
      );

      // Update localStorage
      const providers = JSON.parse(localStorage.getItem('providers') || '[]');
      const updatedProviders = providers.map((p: Provider) => 
        p.id === currentProvider.id ? { ...p, ...editForm } : p
      );
      localStorage.setItem('providers', JSON.stringify(updatedProviders));

      setNotification({
        open: true,
        message: 'Provider updated successfully',
        severity: 'success'
      });

      handleEditClose();
    } catch (error: any) {
      console.error('Error updating provider:', error);
      if(error.message.includes("Authentication required")){
        throw error;
      }
      setNotification({
        open: true,
        message: error.message || 'Failed to update provider',
        severity: 'error'
      });
    }
  };

  const handleCreateProvider = () => {
    router.push('/provider/create');
  };

  const handleProviderClick = (params: any) => {
    router.push(`/provider/${params.id}`);
  };

  const handleCloseNotification = () => {
    setNotification({
      ...notification,
      open: false
    });
  };


  return (
   
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, alignItems: 'center' }}>
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
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
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

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Provider</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="business_name"
            label="Business Name"
            type="text"
            fullWidth
            variant="outlined"
            value={editForm.business_name}
            onChange={handleFormChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={editForm.email}
            onChange={handleFormChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="tel"
            fullWidth
            variant="outlined"
            value={editForm.phone}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEditSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Archive Confirmation Dialog */}
      <Dialog
        open={archiveOpen}
        onClose={handleArchiveClose}
      >
        <DialogTitle>
          Archive Provider
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to archive {currentProvider?.business_name}? 
            This provider will no longer be available for new operations.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleArchiveClose}>Cancel</Button>
          <Button onClick={handleArchiveConfirm} color="error" variant="contained">
            Archive
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}