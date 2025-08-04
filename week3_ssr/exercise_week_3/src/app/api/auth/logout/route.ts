import {cookies} from "next/headers";
import { NextResponse } from "next/server";

export async function POST(){
    (await cookies()).delete('token');
    (await cookies()).delete('user');
    return NextResponse.json({success: true}, {status: 200});

}