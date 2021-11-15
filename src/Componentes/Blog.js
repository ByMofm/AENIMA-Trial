import React from "react";
import './Blog.css';
import { Container,Row,Col } from "react-bootstrap";
import art_big_01 from "../Assets/img/articulo_big_01.png"
import art_big_02 from "../Assets/img/articulo_big_02.png"
import art_small_01 from "../Assets/img/articulo_small_01.png"
import art_small_02 from "../Assets/img/articulo_small_02.png"
import art_small_03 from "../Assets/img/articulo_small_03.png"
import time from "../Assets/iconos/time.svg"


function Blog(){

    return(
     
        <div className="container-blog">
            <h2 className="cnt-blog-text">BLOG</h2> 
                <Container className="cg-blog-left">
                    <Row>
                        <Col className="col-blog-01">
                            <img src={art_big_01} className="card-image" />    
                            <span className="card01-title-blog">CIUDAD</span>
                            <span className="card01-text-blog">Artículo de puente</span>
                            <span className="card01-description-blog">Un puente es una construcción que permite salvar un accidente geográfico</span>
                            <img src={time} className="icon-time" />
                            <span className="card01-time-blog">Hace 2m</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-blog-02">
                            <img src={art_big_02} className="card-image"/>    
                            <span className="card02-title-blog">AVENTURA</span>
                            <span className="card02-text-blog">Artículo de bosque</span>
                            <span className="card02-description-blog">Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.</span>
                            <img src={time} className="icon02-time" />
                            <span className="card02-time-blog">Hace 15m</span>
                        </Col>
                    </Row>
                </Container>
                <Container className="cg-blog-right">    
                    <Row>
                        <Col className="col-blog-03">
                            <img src={art_small_01} className="card-image"/>
                            <span className="card03-text-blog">Artículo de elefante</span>
                            <img src={time} className="icon03-time" />
                            <span className="card03-time-blog">Hace 3h</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-blog-04">
                            <img src={art_small_02} className="card-image"/>
                            <span className="card04-text-blog">Artículo de loro</span>
                            <img src={time} className="icon04-time" />
                            <span className="card04-time-blog">Hace 4h</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-blog-05">
                            <img src={art_small_03} className="card-image"/>
                            <span className="card05-text-blog">Artículo de camino</span>
                            <img src={time} className="icon05-time" />
                            <span className="card05-time-blog">Hace 8h</span>
                        </Col>
                    </Row>
                </Container>
        </div>   

    )
}

export default Blog