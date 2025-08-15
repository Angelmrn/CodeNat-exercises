import React from "react";
import ErrorButton from "../../components/error/ErrorButton";



import ProductList from "../../components/product/ProductList";

export default async function ProductsPage(){

    return (
        <>
            <ProductList />
            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                margin: '20px 0' 
            }}>
                <ErrorButton />
            </div>
        </>
    );
}