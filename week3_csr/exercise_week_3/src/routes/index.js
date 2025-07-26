import React from 'react';
import {BrowserRouter, Routes, Route } from'react-router-dom';

import LoginPage from '../pages/auth/LoginPage';
import PorfilePage from '../pages/auth/PorfilePage';
import CartPage from '../pages/cart/CartPage';
import DashboardLayout from '../pages/auth/DashboardLayout';
import ProductCard from '../pages/auth/ProductCard';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />} />
                {/* <Route path="/" element={<LoginPage />} />*/}
                <Route path="/profile" element={<PorfilePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/products" element={<ProductCard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;