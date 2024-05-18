import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/esqueciSenha" element={<EsqueciSenha />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;