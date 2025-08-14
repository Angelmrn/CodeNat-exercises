"use client"

import {useEffect} from "react";
import {Button} from "@mui/material";
import Link from "next/link";


export default function GlobalErr({error, reset}:
    {error: Error & {digest?:string};
     reset:() => void;
    }) {
    useEffect(() => {
        console.error("Global error application: ", error)
    }, [error]);

    return(
        <html>
            <body>
                <h2>Something went wrong!</h2>
                {process.env.NODE_ENV === "development" && (
                    <pre>{error.message}</pre>
                )}
                <Button onClick={reset}>Try Again</Button>
                <Link href="/">
                    <Button>Go to Dashboard</Button>
                </Link>
            </body>
        </html>
    )

}