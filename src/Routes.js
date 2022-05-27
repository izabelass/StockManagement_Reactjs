import React from 'react';

import { Route, Routes } from 'react-router';
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import ListProducts from './components/ListProducts';
import ResponsiveAppBar from './components/NavBar'

export default () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Inicio" element={<Home />} />
                <Route exact path="Cadastro" element={<AddProduct />} />
                <Route exact path="Consulta" element={<ListProducts />} />
            </Routes>

        </>


    );
}
