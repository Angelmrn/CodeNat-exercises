import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, email, password } = body;
  
  try {
    
    const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    const responseText = await response.text();

    if (!response.ok) {
      let errorMsg = "Invalid credentials";
      try {
        const error = JSON.parse(responseText);
        errorMsg = error.detail || error.message || error.error || errorMsg;
      } catch (e) {}
      
      return NextResponse.json({ error: errorMsg }, { status: response.status });
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      return NextResponse.json({ error: "Invalid response format" }, { status: 500 });
    }

    //Detect token in multiple formats
    const token = data.key || data.token || data.access || data.access_token;
    
    if (!token) {
      return NextResponse.json({ error: "No token in response" }, { status: 500 });
    }

    // Store the token in cookies
    (await cookies()).set({
      name: 'token',
      value: token, 
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 
    });

    // Store user data in cookies
    (await cookies()).set({
      name: 'user',
      value: JSON.stringify({
        username,
        email,
        ...((data.user || data.profile) && { profile: data.user || data.profile })
      }),
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error: ', error);
    return NextResponse.json({ error: 'Error during login' }, { status: 500 });
  }
}