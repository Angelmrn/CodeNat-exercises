import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function PUT(request: Request, context: { params: { id: string } }) {
    try {
        const { id } = await context.params;
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;

        if(!authToken){
            return NextResponse.json({ detail: 'Unauthorized' }, { status: 401 });
        }
        console.log(`Archiving provider ${id}`);

        const getResponse = await fetch(`https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": `JWT ${authToken}`
            },
            cache: 'no-store'
        });
        if(!getResponse.ok){
            return NextResponse.json({ detail: "Provider not found" }, { status: 404 });
        }

        const provider = await getResponse.json();

        const updateProvider = {
            ...provider,
            is_archived: true
        };

        const updateResponse = await fetch(`https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "Authorization": `JWT ${authToken}`
            },
            body: JSON.stringify(updateProvider)
        });

        const responseText = await updateResponse.text();

        if(!updateResponse.ok){
            let errdata;
            try{
                errdata = JSON.parse(responseText);
            }catch{
                errdata = {detail: `API Error: ${updateResponse.status} ${updateResponse.statusText}` };
            }

            return NextResponse.json(
                {detail: errdata?.detail || "Failed to archive provider" },
                {status: updateResponse.status}
            );
        }

        revalidatePath('/provider');
        console.log(`Path /provider revalidated after successfully archiving provider ${id}`);

        return NextResponse.json({
            message: "Provider archived successfully",
            id: parseInt(id)
        });
    }catch(error){
        console.error("Error archiving provider:", error);
        return NextResponse.json({ detail: "Failed to archive provider" }, { status: 500 });
    }
}