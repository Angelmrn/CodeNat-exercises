"use client";
import { useEffect, useState, useCallback } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
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
  const [error, setError] = useState<Error | null>(null);

  // Obtain the provider ID from the URL parameters
  const providerId = params.id;

  const fetchProvider = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/auth/provider/${providerId}`, {
        method: "GET",
        cache: "no-store"
      });

      if(response.status === 404){
        return notFound();
      }
      
      const data = await response.json();
      
      if (!response.ok) {
       if (response.status === 401) {
          throw new Error("Authentication required. Please log in again.");
        } else {
          throw new Error(data.detail || "Failed to load provider details");
        }
      }
      
      setProvider(data);
      setError(null);

    } catch (err) {
      console.error("Error fetching provider:", err);
      setProvider(null);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [providerId]);

  useEffect(() => {
    if (providerId) fetchProvider();
  }, [providerId, fetchProvider]);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (!provider) {
    return notFound();
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
            href="/provider/providers_view"
          >
            Back to Providers
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
