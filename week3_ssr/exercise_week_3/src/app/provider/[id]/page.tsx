"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Paper, Box, Typography, Button, Divider } from "@mui/material";
import Loading from "./loading";

interface Provider {
  id: number;
  business_name: string;
  email: string;
  phone: string;
}

export default function ProviderDetail() {
  const params = useParams();
  const router = useRouter();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtain the provider ID from the URL parameters
  const providerId = params.id;

  useEffect(() => {
    // Load provider details from API
    const fetchProvider = () => {
    try {
    const providers: Provider[] = JSON.parse(localStorage.getItem("providers") || "[]");
    const foundProvider = providers.find((p: Provider) => p.id === Number(providerId));
      if (foundProvider) {
        setProvider(foundProvider);
        setError("");
      } else {
        setProvider(null);
        setError("Provider not found");
      }
    } catch (err) {
      setProvider(null);
      setError("Failed to load provider details");
    } finally {
      setLoading(false);
    }
  };
  if (providerId) fetchProvider();
}, [providerId]);

  if(loading){
    return(<Loading/>);
  }

  if (error || !provider) {
    return (
      <div className="container mx-auto p-4 max-w-md">
        <Paper className="p-6">
          <Typography variant="h5" color="error" gutterBottom>
            {error || "Provider not found"}
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            component={Link}
            href="/"
          >
            Back to Dashboard
          </Button>
        </Paper>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Paper className="p-6">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1">
            Provider Details
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            component={Link}
            href="/"
          >
            Back to Dashboard
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Provider ID
          </Typography>
          <Typography variant="body1">{provider.id}</Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Business Name
          </Typography>
          <Typography variant="h6">{provider.business_name}</Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Email
          </Typography>
          <Typography variant="body1" 
            sx={{ 
              bgcolor: 'background.default', 
              p: 2, 
              borderRadius: 1,
              whiteSpace: 'pre-wrap'
            }}
          >
            {provider.email || "No email provided"}
          </Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Phone
          </Typography>
          <Typography variant="body1" 
            sx={{ 
              bgcolor: 'background.default', 
              p: 2, 
              borderRadius: 1,
              whiteSpace: 'pre-wrap'
            }}
          >
            {provider.phone || "No phone number provided"}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}