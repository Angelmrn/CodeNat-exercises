"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { Toolbar, Box } from "@mui/material";
import AppB from "../components/user/AppBar";
import Draw from "../components/user/Draw";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';


const drawerWidth = 240;

export default function Dashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    const theme = useTheme();
    //Detect if the screen is small (mobile)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
    const [open, setOpen] = React.useState(false);
    // Function to toggle the drawer open/close
    const handleDrawerToggle = () => { 
        setOpen(!open);
    };
    
    useEffect(() => {
        const getUserFromCookies = () => {
            const userCookies = document.cookie.split(';')
                .find(cookie => cookie.trim().startsWith('user='));

            if(!userCookies){
                return null;
            }

            try{
                const userValue = userCookies.split('=')[1];
                return JSON.parse(decodeURIComponent(userValue));
            }catch (error){
                console.error("Error parsing user cookie:", error);
                return null;
            }
        };

        const user = getUserFromCookies();
        if(!user){
            router.push('/login');
            return;
        }

        setUser(user);
        setLoading(false);
    },[router]);

    if(loading){
        return (<div>Loading...</div>)
    }

    // If no user after loading, show button to go to login
    if(!user){
        return(
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
    

    return(
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
                        <h1 className="text-2xl font-bold text-blue-500">Dashboard</h1>
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

                    <div className="bg-transparent shadow rounded-lg p-8 mb-6 text-center border-[#D6D4D4]">
                        <h2 className="text-2xl font-bold mb-3 text-black">Welcome!</h2>
                        <p className="text-lg text-black">
                            Hello, <span className="font-semibold text-blue-500">{user.username }</span>
                            <span className="text-gray-500"> ({user.email})</span>
                        </p>
                    </div>
                </div>
            </Box>
        </Box>
    );  
}