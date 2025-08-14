"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation" 
import { Button, Box, Typography, Paper, Container } from "@mui/material" 

export default function CreateProviderErr({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error(`Create provider error:`, error);
    }, [error]);

    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Error creating provider
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
              
              <Button 
                variant="outlined" 
                onClick={() => router.push('/provider')}
              >
                Go back to providers
              </Button>
            </Box>
          </Paper>
        </Container>
    );
}