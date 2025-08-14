import { Container, Typography, Button, Paper } from '@mui/material';
import Link from "next/link";

export default function ProviderNotFound(){
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Provider Not Found
            </Typography>
            
            <Typography color="text.secondary">
              The provider you are looking for does not exist or has been removed.
            </Typography>
            
            <Button 
              variant="contained" 
              component={Link} 
              href="/provider"
            >
              See all providers
            </Button>
          </Paper>
        </Container>
    )
}