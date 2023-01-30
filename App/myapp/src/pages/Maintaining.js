import { Col, Row } from "react-bootstrap";
import NewsSmallCard from '../component/NewsSmallCard';


export function Maintaining () {
    return <>
        <div className="maintaining">
            
            <div className="maintaining-head">
                <Row>
                    <Col lg={{span:"6", offset:"3"}}>
                        <img src="./img/SENSE.svg"  width={"50%"}></img>
                    </Col>
                    <Col lg={{span:"6", offset:"3"}}>
                        <h1>Maintenance en cours</h1>
                    </Col>
                    </Row>
            </div>
            
            <div className="maintaining-text">
                <Row>
                    <Col lg={{span:"5", offset:"1"}}>
                        <img src="../img/image 129.svg" width={"100%"}></img>
                    </Col>
                    <Col lg={{span:"5", offset:"1"}}><h2>La VR revient bientôt !</h2>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col lg={{span:"8", offset:"2"}}>
                        <div className="small-news-holder">
                            <NewsSmallCard
                                title="Événement: La chasse à l'oeuf"
                                paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                preview="./img/Image 8.svg"
                            />

                            <NewsSmallCard
                                title="Un nouvel équipement arrive !"
                                paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                preview="./img/Image 9.svg"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        
    </>
}