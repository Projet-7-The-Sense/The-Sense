import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsArrowRightShort } from 'react-icons/bs';
import {AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Collapse from "react-bootstrap/esm/Collapse";
import FormInsertReservation from "./FormInsertReservation";
import { Link } from "react-router-dom";

const CardRoom = (props) => {
    const [open, setOpen] = useState(false);
    return <>
    <div className="cardblock">
        <Container >
            <Row>
            <Col xs={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 12, offset: 0 }}>
                <Card className="bg-dark text-white">
                    <Card.Img src={props.image} alt="Card image" />
                    <Card.ImgOverlay>
                        <Row>
                            <Col lg={{span:1 , offset:11}} xs={{span:1 , offset:10}}>
                                <img src="./img/Vector.svg"></img>
                            </Col>
                        </Row>
                        <div className="icon">
                            <Row >
                                <Col lg={{span:1 , offset:10}} xs={{span:2 , offset:8}} className="back-icon">
                                    <img src="./img/timer.png"></img>
                                    <p>{props.timer}</p>
                                </Col>
                                <Col lg={{span:1 , offset:0}} xs={{span:2 , offset:0}} className="back-icon" >
                                    <img src="./img/Icone.svg"></img>
                                    <p>{props.player}</p>
                                </Col>
                            </Row>
                        </div>

                        
                    </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>
        </Container>
        <Container  >
            <Row >
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}  >
                <Card style={{ width: '100%' }} >
                    <Card.Body  className="cardtextc">
                        <div className="cardtitle">
                            <h2 className="titlecard1">{props.slogan} &#124;</h2>
                
                            <h2 className="titlecard2"> {props.title}</h2>
                        </div>
                        <p id="sub" >{props.age}</p>
                        <Card.Text className="contentcard">
                            {props.content}
                        </Card.Text>
                        <Row>
                            <Col xs={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 5 }}>
                                {!props.home?(
                                    
                                    <>
                                    <button 
                                    className="button-reserv"
                                    onClick={() => setOpen(!open)}
                                    ><img src="./img/BoutonRes.svg"></img></button>
                                    
                                    </>

                                ):(
                                    <>
                                    <Link to="/experiences"><img src="./img/BoutonRes.svg"></img></Link>
                                    </>
                                )}
                                
                            </Col>
                            <Col  xs={{ span: 0, offset: 0 }} md={{ span: 5, offset: 4 }} lg={{ span: 3, offset: 0 }}>
                                {!props.home?(       
                                        <>
                                        </>

                                    ):(
                                        <>
                                        <Card.Link href="#" className="link2">Decouvrez la {props.title} <BsArrowRightShort/></Card.Link>
                                        </>
                                    )}
                                
                            </Col>
                        </Row>
                        <Collapse in={open}>
                                        <div className="form-reserv">
                                            <FormInsertReservation
                                                room={props.title}
                                            />
                                            
                                         
                                        </div>
                                    </Collapse>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    </div>
    
    </>
}

export default CardRoom;