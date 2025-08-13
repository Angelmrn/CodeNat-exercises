import React from "react";

type Product = {
    id: number;
    name: string;
    sku: string | null;
    is_active: boolean;
    date_created: string;
};


export default async function ProductsPage(){
    const res = await fetch(
        "https://bapi.suajam.com/arteukimil/api/v1/catalog/product?page=1&items=5",
        {
            next: { revalidate: 30},
        }
    );
    if (!res.ok) throw new Error("Failed to fetch products.");

    const data = await res.json();
    //Fix the data 
    const products: Product[] = Array.isArray(data) ? data : data.results || [];

    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(prod => (
                    <li key={prod.id}>
                        {prod.name}
                        {prod.sku}
                        {prod.is_active}
                        {prod.date_created}
                    </li>
                ))}
            </ul>
        </div>
    );
}