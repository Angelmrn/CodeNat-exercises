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

        if(error.message.includes("Unauthorized") || 
            error.message.includes("authentication") || 
            error.message.includes("login") || 
            error.message.includes("401")) {

            const timer = setTimeout(() => {
                router.push("/login");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [error, router]);

    const isAuthError = error.message.includes("Unauthorized") || 
                        error.message.includes("authentication") || 
                        error.message.includes("login") ||
                        error.message.includes("401");

    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom color={isAuthError ? "primary" : "error"}>
              {isAuthError ? "Authentication Required" : "Error creating provider"}
            </Typography>
            
            {isAuthError ? (
              <Typography variant="body1" sx={{ mb: 3 }}>
                You need to be logged in to access this feature.
                Redirecting to login page...
              </Typography>
            ) : (
              <>
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
              </>
            )}
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {isAuthError ? (
                <Button 
                  variant="contained" 
                  onClick={() => router.push('/login?returnUrl=/provider/create')}
                  color="primary"
                >
                  Go to Login
                </Button>
              ) : (
                <>
                  <Button variant="contained" onClick={reset}>
                    Try Again
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    onClick={() => router.push('/provider')}
                  >
                    Go back to providers
                  </Button>
                </>
              )}
            </Box>
          </Paper>
        </Container>
    );
}