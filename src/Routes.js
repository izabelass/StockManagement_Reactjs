import React from 'react';

import { Route, Routes } from 'react-router';
import Home from './components/Home'
import AddProduct from './views/products/AddProduct'
import ResponsiveAppBar from './components/NavBar';
import { ListProducts } from './views/products/ListProducts';

export default () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Inicio" element={<Home />} />
                <Route exact path="/Cadastro:/id?" element={<AddProduct />} />
                <Route exact path="/Consulta" element={<ListProducts />} />
            </Routes>

        </>


    );
}
