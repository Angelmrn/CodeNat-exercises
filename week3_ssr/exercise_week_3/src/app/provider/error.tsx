"use client"

import { useEffect } from "react"
import { Button, Box, Typography, Paper, Container } from "@mui/material"
import Link from "next/link";

export default function ProviderErr({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Provider route error:', error);
  }, [error]);

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Error loading providers data
        </Typography>
        
        {process.env.NODE_ENV === "development" && (
          <Typography component="pre" sx={{ 
            bgcolor: '#f5f5f5', 
            p: 2, 
            borderRadius: 1,
            overflowX: 'auto',
            mb: 3,
            color: 'error.main'
          }}>
            {error.message}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={reset}>
            Try Again
          </Button>
          
          <Button component={Link} href="/" variant="outlined">
            Go to Dashboard
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}