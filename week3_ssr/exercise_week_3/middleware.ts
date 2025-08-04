import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    //Check if the user is authenticated
    const token = request.cookies.get('token');
    // If the token does not exist, redirect to login
    if(request.nextUrl.pathname === '/' && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher:['/', '/profile/']
};