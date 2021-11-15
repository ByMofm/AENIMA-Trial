import React from "react";
import './Menu.css';
import Header from "../Componentes/Header";
import Home from "../Componentes/Home";
import Tendencias from "../Componentes/Tendencias";
import Blog from "../Componentes/Blog";
import Footer from "../Componentes/Footer";

function Menu(){
    

    return(
        <>
        
        <Header />
        <Home />
        <Tendencias />
        <Blog />
        <Footer />
        </>

    )
}

export default Menu