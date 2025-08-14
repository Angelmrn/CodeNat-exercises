import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Link from "next/link";


type Product = {
    id: number;
    name: string;
    sku: string | null;
    is_active: boolean;
    date_created: string;
};

export default async function ProductList(){
    // Generar un ID único para esta renderización
    const renderingId = Math.random().toString(36).substring(7);
    const renderTime = new Date();
   
    
    console.log(`Component function executed at: ${renderTime.toISOString()} (ID: ${renderingId})`);
    
    const fetchStart = Date.now();
    const res = await fetch(
        "https://bapi.suajam.com/arteukimil/api/v1/catalog/product?page=1&items=5",
        {
            cache: 'force-cache',
            next: { revalidate: 30 },
        }
    );
    const fetchTime = Date.now() - fetchStart;
    
    console.log(`Fetch completed in ${fetchTime}ms - Cache hit: ${fetchTime < 50 ? "Likely yes" : "Likely no"}`);

    if (!res.ok) throw new Error("Failed to fetch products.");

    const data = await res.json();
    const products: Product[] = data.data;
    
    return(
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-blue-500">Product List</h1>
            
            
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>SKU</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.sku ?? "N/A"}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={product.is_active ? "Active" : "Inactive"}
                                        color={product.is_active ? "success" : "error"}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {new Date(product.date_created).toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <p className="text-center mt-4">
                <Link href="/" className="text-blue-500">Go Back</Link>
            </p>
        </div>
    );
}