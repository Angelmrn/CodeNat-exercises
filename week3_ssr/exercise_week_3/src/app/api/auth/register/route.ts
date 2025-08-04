import {cookies} from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        const body = await request.json();
        const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/auth/registration",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: body.username,
                email: body.email,
                password1: body.password1,
                password2: body.password2,
                first_name: body.first_name,
                last_name: body.last_name,
                is_staff: body.is_staff,
                is_superuser: body.is_superuser
            })
        });

        const data = await response.json();
        if(!response.ok){
            const errorM = data.detail || data.message || data.error || "Registration failed";
            return NextResponse.json({error: errorM}, {status: response.status});
        }

        return NextResponse.json({
            success:true,
            message: "User registered successfully"
        });
    }catch(error: any){
        console.error("Registration error: ", error);
        return NextResponse.json({
            error: "Error during registration"
        }, {status: 500});
    }
}