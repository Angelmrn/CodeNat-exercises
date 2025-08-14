import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  console.log("API route called: POST /api/provider");
  
  try {
    const body = await request.json();
    console.log("Received request body:", body);
    const { business_name, email, phone } = body;

    const cookieStore = await cookies(); 
    const authToken = cookieStore.get('token')?.value;
    console.log("Auth token exists:", !!authToken);

    if (!authToken) {
      console.log("No auth token found, returning 401");
      return NextResponse.json(
        { error: "Authentication token is missing." },
        { status: 401 }
      );
    }

    console.log("Making request to external API...");
    const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `JWT ${authToken}`,
      },
      body: JSON.stringify({ business_name, email, phone }),
    });
    
    console.log("External API response status:", response.status);
    
    // Obtener el texto de la respuesta primero
    const responseText = await response.text();
    console.log("External API raw response:", responseText);

    if (!response.ok) {
      console.log("External API returned error status:", response.status);
      let errorData;
      try {
        errorData = JSON.parse(responseText);
        console.log("Parsed error data:", errorData);
      } catch (e) {
        console.log("Failed to parse error response as JSON");
        errorData = { detail: `API Error: ${response.status} ${response.statusText}` };
      }
      return NextResponse.json(
        {
          detail: errorData?.detail || errorData?.message || "API request failed",
          status: response.status
        },
        { status: response.status }
      );
    }

    let data;
    try {
      data = JSON.parse(responseText);
      console.log("Successfully parsed response:", data);
    } catch (e) {
      console.log("Failed to parse successful response as JSON");
      data = { message: "Provider created successfully" };
    }

    revalidatePath('/provider');
    console.log("Revalidated path: /provider");

    console.log("Returning success response to client");
    return NextResponse.json(data, { status: 201 });

  } catch (error) {
    console.error("Unexpected error in provider API:", error);
    return NextResponse.json(
      { detail: "Internal server error", error: String(error) },
      { status: 500 }
    );
  }
}



export async function GET(){
    try{
        const cookieStore = await cookies();
        const authToken = cookieStore.get('token')?.value;

        if(!authToken){
            return NextResponse.json({
                detail: 'Authentication token is missing.'
            }, { status: 401 });
        }

        const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/inventory/supplier",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `JWT ${authToken}`,
            },
            cache: 'no-store'
        });

        if(!response.ok){
            const responseText = await response.text();
            let errorData;
            try{
                errorData = JSON.parse(responseText);
            }catch{
                errorData = {detail: 'Fail to fetch supplier data'};
            }
            return NextResponse.json({
                detail: errorData?.detail || errorData?.message || "Failed to fetch supplier data",
                status: response.status
            });
        }

        const data = await response.json();
        return NextResponse.json(data);
    }catch(error){
        console.error('Error fetching supplier data: ', error);
        return NextResponse.json({
            detail: 'Internal server error',
            status: 500
        });
    }
}

