"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { Toolbar, Box } from "@mui/material";
import AppB from "../../../components/user/AppBar";
import Draw from "../../../components/user/Draw";
import Providers from "../../../components/user/Providers";
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
                    <h1 className="text-2xl font-bold text-blue-500 mb-3">Dashboard</h1>
                    <div className="bg-white shadow rounded-lg p-8 mb-6 text-center border border-[#d4d4d6]">
                        <Providers />
                    </div>
                </div>
            </Box>
        </Box>
    );  
}