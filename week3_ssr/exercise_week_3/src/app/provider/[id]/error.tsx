"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import Link from "next/link";

export default function ProviderError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  
  // Detectar si es un error de autenticación basado en el mensaje
  const isAuthError = error.message.includes("Authentication") || 
                     error.message.includes("log in") ||
                     error.message.includes("401") ||
                     error.message.includes("Unauthorized");
  
  useEffect(() => {
    console.error("Provider error:", error);
    
    // Opcional: redirección automática al login después de un tiempo
    if (isAuthError) {
      const timer = setTimeout(() => {
        router.push(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`);
      }, 3000); // 3 segundos antes de redireccionar
      
      return () => clearTimeout(timer);
    }
  }, [error, isAuthError, router]);

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        {isAuthError ? (
          <>
            <Typography variant="h4" color="primary" gutterBottom>
              Authentication Required
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              You need to be logged in to view this provider's details.
              {process.env.NODE_ENV === "development" && (
                <Box component="pre" sx={{ 
                  mt: 2, 
                  p: 2, 
                  bgcolor: '#f5f5f5', 
                  borderRadius: 1,
                  textAlign: 'left',
                  overflow: 'auto',
                  maxWidth: '100%',
                  fontSize: '0.8rem'
                }}>
                  {error.message}
                </Box>
              )}
            </Typography>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Redirecting to login page in a few seconds...
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                href={`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`}
              >
                Login Now
              </Button>
              
              <Button 
                variant="outlined"
                component={Link}
                href="/provider/providers_view"
              >
                Back to Providers
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h4" color="error" gutterBottom>
              Error Loading Provider
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              There was a problem loading this provider's details.
              {process.env.NODE_ENV === "development" && (
                <Box component="pre" sx={{ 
                  mt: 2, 
                  p: 2, 
                  bgcolor: '#f5f5f5', 
                  borderRadius: 1,
                  textAlign: 'left',
                  overflow: 'auto',
                  maxWidth: '100%',
                  fontSize: '0.8rem'
                }}>
                  {error.message}
                </Box>
              )}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button 
                variant="contained"
                onClick={reset}
              >
                Try Again
              </Button>
              
              <Button 
                variant="outlined"
                component={Link}
                href="/provider/providers_view"
              >
                Back to Providers
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
}