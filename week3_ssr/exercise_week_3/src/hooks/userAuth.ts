"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function userAuth(redirectPath = '/login'){
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getUserFromCookies = () => {
            const userCookies = document.cookie.split(';')
                .find(cookie => cookie.trim().startsWith('user='));

            if(!userCookies){
                return null;
            }
            try {
                const userValue = userCookies.split('=')[1];
                return JSON.parse(decodeURIComponent(userValue));
            }catch(error){
                console.error("Error parsing user cookie:", error);
                return null;
            }
        };

        const user = getUserFromCookies();
        if(!user){
            const currentPath = window.location.pathname;
            router.push(`${redirectPath}?redirect=${currentPath}`);
            return;
        }

        setUser(user);
        setLoading(false);
    }, [router, redirectPath]);

    return {user, loading};
}