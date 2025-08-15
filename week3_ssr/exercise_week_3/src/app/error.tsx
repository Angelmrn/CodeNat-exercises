"use client"

import { useEffect } from "react";
import { Button } from "@mui/material";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div style={{ 
      padding: '2rem', 
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'red' }}>¡Global error!</h1>
      <pre style={{ 
        backgroundColor: 'rgba(0,0,0,0.7)', 
        padding: '1rem', 
        borderRadius: '0.5rem', 
        margin: '1rem 0',
        maxWidth: '80%', 
        overflow: 'auto' 
      }}>
        {error.message}
      </pre>
      <div>
        <Button 
          onClick={() => reset()}
          variant="contained"
          style={{ backgroundColor: 'white', color: '#d32f2f', marginRight: '1rem' }}
        >
          Try again
        </Button>
        <Button 
          component={Link} 
          href="/"
          variant="contained"
          style={{ backgroundColor: 'white', color: '#d32f2f', marginRight: '1rem'}}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}