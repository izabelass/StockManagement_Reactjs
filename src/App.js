import React from 'react';

import { Route, Routes } from 'react-router';
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import ListProducts from './components/ListProducts'
import ResponsiveAppBar from './components/Nav'

function App() {
    return (
        <>
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/Inicio" element={ <Home /> } />
                <Route path="Produtos" element={ <AddProduct /> } />
                <Route path="Consulta" element={ <ListProducts /> } />
            </Routes>
        </>


    );
}

export default App;

