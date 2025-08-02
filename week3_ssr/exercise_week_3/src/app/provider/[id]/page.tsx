import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProviderPage() {
    return (
        <div>
        <h1>Provider Page</h1>
        <p>This is a placeholder for the provider details.</p>    
            <Link href="/register">Register</Link> <br />
            <Link href="/login">Login</Link>
        </div>
    );
}