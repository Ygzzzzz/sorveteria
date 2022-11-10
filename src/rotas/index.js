import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../paginas/home';
import Sabores from '../paginas/sabores';
import Sobre from '../paginas/sobre';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sabores" element={<Sabores/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}