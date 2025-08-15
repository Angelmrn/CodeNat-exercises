"use client"

import { Button } from '@mui/material';
import { useState } from 'react';

export default function ErrorButton() {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    throw new Error("Error triggered from ErrorButton");
  }
  
  return (
    <Button 
      variant="contained" 
      style={{ backgroundColor: '#F7F2F2', color: '#d32f2f' }}
      onClick={() => setHasError(true)}
    >
      Trigger Global Error.tsx
    </Button>
  );
}