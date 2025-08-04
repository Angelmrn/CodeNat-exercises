import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, email, password } = body;
  
  try {
    // Llamar a tu API externa
    const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.message || "Invalid credentials" }, { status: response.status });
    }

    const data = await response.json();

    //Store the token in cookies
    (await cookies()).set({
        name: 'token',
        value: data.token,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 // 1 day
    });

    // Store user data in cookies
    (await cookies()).set({
        name: 'user',
        value: JSON.stringify({
            username,
            email
        }),
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 // 1 day
    });

    return NextResponse.json({ success: true });
    }catch(error){
        console.error('Login error: ', error);
        return NextResponse.json({error: 'Error during login'}, { status: 500 });
    }
}
