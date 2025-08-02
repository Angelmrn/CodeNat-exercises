"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    
    useEffect(() => {
        // Check if token exists in local storage
        const token = localStorage.getItem("token");
        if(!token){
            router.push("/login");
            return;
        }

        // If token exists, try to get user data
        const userData = localStorage.getItem("user");
        if(userData){
            try{
                setUser(JSON.parse(userData));
            }catch(e){
                console.error("Error parsing user data:", e);
            }
        }

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
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        router.push('/login');
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Logout
                </button>
            </div>

            <div className="bg-transparent shadow rounded-lg p-8 mb-6 text-center border border-gray-200">
                <h2 className="text-2xl font-bold mb-3">Welcome!</h2>
                <p className="text-lg">
                    Hello, <span className="font-semibold">{user.username }</span>
                    <span className="text-gray-500"> ({user.email})</span>
                </p>
            </div>
        </div>
    );
}