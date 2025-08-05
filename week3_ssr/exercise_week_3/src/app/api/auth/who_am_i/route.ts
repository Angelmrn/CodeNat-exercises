import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  return handleRequest();
}

export async function POST() {
  return handleRequest();
}

async function handleRequest() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    console.log("Token:", token ? "Yes" : "No");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/auth/who_am_i/", {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ token })
    });

    console.log("API Response:", response.status);
    const responseText = await response.text();
    console.log(responseText);

    if (!response.ok) {
      let errorMessage = "Failed to fetch user data";
      
      if (responseText) {
        try {
          const errData = JSON.parse(responseText);
          errorMessage = errData.detail || errData.message || errData.error || errorMessage;
        } catch (e) {
          errorMessage = responseText;
        }
      }
      
      console.error("API Error:", errorMessage);
      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    let userData;
    try {
      userData = JSON.parse(responseText);
      console.log("User Data:", userData);
    } catch (e) {
      console.error("Error parsing user data:", e);
      return NextResponse.json(
        { error: "Error parsing user data" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error in who_am_i route:", error);
    return NextResponse.json(
      { error: "Internal Server Error: " + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );  
  }
}