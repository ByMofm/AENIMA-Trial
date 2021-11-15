import React from "react";
import './Home.css';
import picture01 from "../Assets/img/Viajes_Hero.jpg"
import pin from "../Assets/iconos/ic_pin.svg"
import arrow from "../Assets/iconos/arrow.svg"
import slider from "../Assets/nav_slider.svg"
import { Container } from "react-bootstrap";


function Home(){

    return(
        <>
         <div className="container-home">
            <img src={picture01} alt="PaisajeAS" className="imghome"/>
            <img src={slider} className="nav-slider"/>
            <Container className="container-left">       
                <img src={pin} alt="pin" className="pin" />
                <h1 className="titulo-home">AMERICA DEL SUR</h1>
                <hr className="divider"/>
                <h2 className="texto_home">Lugares maravillosos por America del Sur</h2>
                <h3 className="texto_descriptivo_home">Estos son algunos lugares que elijen la mayoría de los turistas que visitan America del Sur.</h3>
            </Container>
            <Container className="container-right">     
                    <h2 className="container-right-titulo">PRÓXIMA AVENTURA</h2>
                    <img src={arrow} className="arrow-titulo"/>
                    <h2 className="container-right-text">Europa Meridional</h2>
                    <h3 className="container-right-decription">Forman parte veinte países, ej. España, Francia, etc.</h3>
            </Container>                            
                    
        </div>
        
        
        </>

    )
}

export default Home