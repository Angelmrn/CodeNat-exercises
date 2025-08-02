"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateProviderPage(){
    return (
        <form>
            <div>Form to create a new provider</div>
            <p className="text-center">
            <Link href="/" className="text-blue-500">Dashboard</Link>
            </p>
        </form>
        );
}