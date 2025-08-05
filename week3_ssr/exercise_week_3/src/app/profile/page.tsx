"use client";
import { useEffect, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { useRouter } from "next/navigation";
import AppB from "../../components/user/AppBar";
import Draw from "../../components/user/Draw";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


interface User {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}

const drawerWidth = 240;

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/auth/who_am_i");
        
        if (!response.ok) {
          if (response.status === 401) {
            router.push('/login');
            return;
          }
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p>Redirect to Login...</p>
          <button
            onClick={() => router.push("/login")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppB isMobile={isMobile} onMenuClick={handleDrawerToggle} />
      <Draw
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: 2, sm: 3 },
          marginLeft: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-500">User Profile</h1>

            <button
              onClick={async () => {
                await fetch('/api/auth/logout', {method: 'POST'});
                router.push('/login'); 
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>

          <div className="bg-white shadow rounded-lg p-8 mb-6 text-center border border-[#D6D4D4]">
            <h2 className="text-2xl font-bold mb-3 text-black">Welcome!</h2>
            <p className="text-lg text-black mb-4">
              Hello, <span className="font-semibold text-blue-500">{user.username}</span>
              <span className="text-gray-500"> ({user.email})</span>
            </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-md text-gray-700">
                  Full Name: <span className="font-medium">{user.first_name} {user.last_name}</span>
                </p>
              </div>
        
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
            >
              Go Back
            </button>
          </div>
        </div>
      </Box>
    </Box>
  );
}