import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsArrowRightShort } from 'react-icons/bs';

const CardRoom = (props) => {
    return <>
    <div className="cardblock">
        <Container >
            <Row>
            <Col xs={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 12, offset: 0 }}>
                <Card className="bg-dark text-white">
                    <Card.Img src="img/image 2.svg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>
        </Container>
        <Container  >
            <Row >
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }}  >
                <Card style={{ width: '100%' }} >
                    <Card.Body  className="cardtextc">
                        <div className="cardtitle">
                            <h2>The conjuring expérience &#124;</h2>
                
                            <h2 className="titlecard poppins-thin"> Dark Room</h2>
                        </div>
                        <p id="sub" >Card Subtitle</p>
                        <Card.Text className="contentcard">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Row>
                            <Col xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 5 }}>
                                <Card.Link href="#" ><img src="../../public/img/BoutonRes.svg"></img></Card.Link>
                            </Col>
                            <Col  xs={{ span: 0, offset: 0 }} md={{ span: 5, offset: 4 }} lg={{ span: 3, offset: 0 }}>
                                <Card.Link href="#" className="link2">Decouvrez la dark room <BsArrowRightShort/></Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    </div>
    
    </>
}

export default CardRoom;