import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function PUT(request: Request, context: { params: { id: string } }) {
    try {
        const { id } = await context.params;
        const body = await request.json();
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;

        if (!authToken) {
            return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 });
        }

        console.log(`Updating provider ${id} with data:`, body);

        // Get the list of providers
        const listResponse = await fetch(
            `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `JWT ${authToken}`,
                },
                cache: 'no-store'
            }
        );

        if (!listResponse.ok) {
            return NextResponse.json(
                { detail: "Failed to fetch providers list", status: listResponse.status },
                { status: listResponse.status }
            );
        }

        const providers = await listResponse.json();

        // Get the provider/[id]
        const providerExists = Array.isArray(providers)
            ? providers.some((p: any) => p.id === parseInt(id))
            : (providers.results || []).some((p: any) => p.id === parseInt(id));
        
        if (!providerExists) {
            return NextResponse.json(
                { detail: "Provider not found", status: 404 },
                { status: 404 }
            );
        }
        
        const updateResponse = await fetch(`https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `JWT ${authToken}`,
            },
            body: JSON.stringify(body)
        });

        const responseText = await updateResponse.text();
        console.log(`API Response Status: ${updateResponse.status}`);
        console.log(`API Response Body: ${responseText.substring(0, 200)}...`);
        
        if (!updateResponse.ok) {
            let errorData;
            try {
                errorData = JSON.parse(responseText);
            } catch {
                errorData = { detail: `API Error: ${updateResponse.status} ${updateResponse.statusText}` };
            }
            
            return NextResponse.json(
                { 
                    detail: errorData?.detail || errorData?.message || `Failed to update provider: ${updateResponse.status} ${updateResponse.statusText}`, 
                    status: updateResponse.status,
                    error: true
                },
                { status: updateResponse.status }
            );
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch {
            data = { id: parseInt(id), ...body };
        }

        revalidatePath('/provider');
        revalidatePath(`/provider/${id}`);
        console.log(`Paths /provider and /provider/${id} revalidated after successful PUT`);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error updating provider:", error);
        return NextResponse.json({ 
            detail: "Failed to update provider", 
            error: String(error),
            status: 500 
        }, { status: 500 });
    }
}

export async function GET(request: Request, context: { params: { id: string } }) {
    try {
        const { id } = await context.params;
        console.log(`GET Provider ID: ${id}`);
        
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;
        console.log(`Token exists: ${!!authToken}`);

        if (!authToken) {
            return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 });
        }

        // get list of providers
        const listResponse = await fetch(
            `https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `JWT ${authToken}`,
                },
                cache: 'no-store'
            }
        );
        
        if (!listResponse.ok) {
            return NextResponse.json({ 
                detail: "Failed to fetch providers list", 
                status: listResponse.status 
            }, { status: listResponse.status });
        }
        
        const providers = await listResponse.json();

        // Search for the specific provider by ID
        const provider = Array.isArray(providers) 
            ? providers.find((p: any) => p.id === parseInt(id))
            : (providers.results || []).find((p: any) => p.id === parseInt(id));
            
        if (!provider) {
            return NextResponse.json({ 
                detail: "Provider not found", 
                status: 404 
            }, { status: 404 });
        }
        
        return NextResponse.json(provider);
    } catch (error) {
        console.error(`Error: ${error}`);
        return NextResponse.json({ 
            detail: "Failed to retrieve provider", 
            error: String(error)
        }, { status: 500 });
    }
}