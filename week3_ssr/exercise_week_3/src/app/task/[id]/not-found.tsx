import { Container, Typography, Button, Paper } from '@mui/material';
import Link from "next/link";

export default function TaskNotFound(){
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Task Not Found
            </Typography>
            
            <Typography color="text.secondary">
              The task you are looking for does not exist or has been removed.
            </Typography>
            
            <Button 
              variant="contained" 
              component={Link} 
              href="/"
            >
              See all tasks
            </Button>
          </Paper>
        </Container>
    )
}