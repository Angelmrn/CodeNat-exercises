import {cookies} from 'next/headers';
import { NextResponse } from 'next/server';

//PUT
export async function PUT(request: Request, context: {params: {id: string}}){
    
    try{
        const {id} = await context.params;
        const body = await request.json();
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;

        if(!authToken){
            return NextResponse.json({detail: 'Unauthorized'}, {status: 401})
        }

        const response = await fetch(`https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}/`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `JWT ${authToken}`,
            },
            body: JSON.stringify(body)
        });
        const responseMessage = await response.text();

        if(!response.ok){
           let errorData;
           try{
            errorData = JSON.parse(responseMessage);
           }catch{
            errorData = { detail: `API Error: ${response.status} ${response.statusText}` };
           }
           return NextResponse.json(
            {detail: errorData?.detail || errorData?.message || "Failed to update provider", status: response.status },
            {status: response.status}
           );
        }

        let data;
        try{
            data = JSON.parse(responseMessage);
        }catch{
            data = {};
        }
        return NextResponse.json(data);
    }catch (error){
        return NextResponse.json({detail: "Failed to update provider", status: 500});
    }
}

//GET
export async function GET(request: Request, context: { params: { id: string } }) {
    try {
        const { id } = await context.params;
        console.log(`🔍 GET Provider ID: ${id}`);
        
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;
        console.log(`🔑 Token exists: ${!!authToken}`);

        if (!authToken) {
            return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 });
        }


        const url = `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}/`;
        console.log(`📡 Fetching URL: ${url}`);
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${authToken}`,
            },
        });
        
        console.log(`📊 API Response Status: ${response.status}`);
        const responseText = await response.text();
        console.log(`📄 API Response Body: ${responseText.substring(0, 200)}...`);
        
        if (!response.ok) {
            return NextResponse.json({ 
                detail: "Provider not found or API doesn't support individual provider fetching",
                status: response.status,
                fallback: true 
            }, { status: 404 });
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            // Si no es JSON válido, devuelve un error
            return NextResponse.json({ 
                detail: "Invalid response format from API", 
                fallback: true 
            }, { status: 500 });
        }
        
        return NextResponse.json(data);
    } catch (error) {
        console.error(`❌ Error: ${error}`);
        // Asegúrate de devolver una respuesta incluso en caso de error
        return NextResponse.json({ 
            detail: "Failed to retrieve provider", 
            error: String(error),
            fallback: true 
        }, { status: 500 });
    }
}

/*
export async function GET(request: Request, context: { params: { id: string } }) {
    try{
        const {id} = await context.params
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;

        if(!authToken){
            return NextResponse.json({detail: 'Unauthorized'}, {status: 401})
        }

        const response = await fetch (`https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}/`,{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `JWT ${authToken}`,
            },
        });

        const responseMessage = await response.text();
        if(!response.ok){
            let errorData;
            try{
                errorData = JSON.parse(responseMessage);
            }catch{
                errorData = { detail: `API Error: ${response.status} ${response.statusText}` };
            }
            return NextResponse.json(
                {detail: errorData?.detail || errorData?.message || "Failed to retrieve provider", status: response.status },
                {status: response.status}
            );
        }

        let data;
        try{
            data = JSON.parse(responseMessage);
        }catch{
            data = {};
        }
        return NextResponse.json(data);
    }catch (error){
        return NextResponse.json({detail: "Failed to retrieve provider", status: 500});
    }
}*/