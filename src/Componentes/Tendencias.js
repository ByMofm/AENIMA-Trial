import React from "react";
import './Tendencias.css';
import card_01 from "../Assets/img/card_01.png"
import card_02 from "../Assets/img/card_02.png"
import card_03 from "../Assets/img/card_03.png"
import { Card,CardGroup } from "react-bootstrap";



function Tendencias(){

    return(
            <div className="container-tc">
                <div className="container-tc-box">
                    <h2 className="title-card-tend">TENDENCIAS</h2>
                            <CardGroup className="cg-tendencias" >
                                <Card className="card-tendencias01">
                                    <Card.Img variant="top" src={card_01} className="mobile_card_image"/>
                                    <div className="badgenuevo"><span className="badge-text">NUEVO</span></div>
                                    <Card.Body>
                                    <Card.Title className="card-title-tendencias">Montañas y magia</Card.Title>
                                    <Card.Text className="card-text-tendencias">
                                        Aquí la descripción para <strong>Montañas y magia </strong>.
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                <Card className="card-tendencias02">
                                    <Card.Img variant="top" src={card_02} />
                                    <Card.Body>
                                    <Card.Title className="card-title-tendencias">Playas y sol</Card.Title>
                                    <Card.Text className="card-text-tendencias">
                                        La descripción de <strong>Playas y sol</strong> debe ser esta.
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                <Card className="card-tendencias03">
                                    <Card.Img variant="top" src={card_03} />
                                    <Card.Body>
                                    <Card.Title className="card-title-tendencias">Nieve y aventura</Card.Title>
                                    <Card.Text className="card-text-tendencias">
                                        Contiene la información de <strong>Nieve y aventura</strong>.
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                </CardGroup>
                        
                </div>
            </div>
    )
}

export default Tendencias