import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { clamp } from "../helpers";

function TarifRoom(props){
    var tarif=1;
    if (props.count==5){
        tarif=0.95;
    }else if (props.count==6){
        tarif=0.90;
    }else if (props.count==7){
        tarif=0.85;
    }else if (props.count==8){
        tarif=0.80;
    }
    return <>

    <Row>
        <div className="tarif-rooms">
            <Col lg="12">
                <img src={props.img}></img>
                <p>De 10 à 18h : {props.tarifj*tarif} € /PERSONNE</p>
                <p>De 18 à 21h : {props.tarifn*tarif} € /PERSONNE</p>

            </Col>
        </div>
    </Row>
    
    </>
}

const ReservationAll = (props) => {
    const [count, setCount]= useState(4);
    
    useEffect(() => {
      },[count]);

    return <>
    
        <Row>
            <Col lg={{span:"10", offset:"1"}}>
                <div className="reservation-all">
                    <div className="header-reservation">
                        <img className="img-reserver" src="/img/RESERVER.png"></img>
                        <h3>N'ATTENDEZ PLUS, RESERVEZ</h3>
                        <h4>NOS TARIFS</h4>
                        <img src="/img/Rectangle 192.png"></img>
                        <p>Voir les tarifs pour </p>
                        <p className="p1">(max 8 personnes)</p>
                        <div className="button-tarif">
                            <button className="button" onClick={() => setCount(clamp(count-1,4,8))}>-</button>
                            <p>{count}</p>
                            <button onClick={() => setCount(clamp(count+1,4,8))}>+</button>
                        </div>

                        <Row>
                            <Col lg={{span:"10", offset:"1"}}>
                                <div className="tarif-room">
                                    <TarifRoom
                                        img="/img/LIGHT ROOM.png"
                                        tarifj={15}
                                        tarifn={20}
                                        count={count}
                                    />
                                    <TarifRoom
                                        img="/img/DARK R.png"
                                        tarifj={20}
                                        tarifn={25}
                                        count={count}
                                    />
                                    <TarifRoom
                                        img="/img/BATTLE R.png"
                                        tarifj={10}
                                        tarifn={15}
                                        count={count}
                                    />
                                    <TarifRoom
                                        img="/img/CREATIVE R.png"
                                        tarifj={25}
                                        tarifn={30}
                                        count={count}
                                    />
                                </div>
                            </Col>
                        </Row>

                    </div>
                    <div className="tab-reservation">
                        <p>aaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                
            </Col>
        </Row>

    

    </>
}

export default ReservationAll;