import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { clamp } from "../helpers";

function TarifRoom(props){
    var tarif=1;
    if (props.count==5){
        tarif=1;
    }else if (props.count==6){
        tarif=0.90;
    }else if (props.count==7){
        tarif=0.80;
    }else if (props.count==8){
        tarif=0.70;
    }
    return <>

    <Row>
        <div className="tarif-rooms">
            <Col lg="12">
                <img src={props.img}></img>
                <Row>
                    <Col>
                        <p>De 10 à 18h : {props.tarifj*tarif} </p>
                    </Col>
                    <Col>
                        <p className="red">€ /PERSONNE</p>
                    </Col>
                    
                    
                </Row>
                <Row>
                    <Col>
                        <p>De 18 à 21h : {props.tarifn*tarif} </p>
                    </Col>
                    <Col>
                        <p className="red">€ /PERSONNE</p>
                    </Col>
                </Row>
                

            </Col>
        </div>
    </Row>
    
    </>
};

function TabReserv(props){

};

const ReservationAll = (props) => {
    const [count, setCount]= useState(4);
    const [day, setDay]= useState(1);
    const horTuesday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horWednesday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horThursday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horFriday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","22h20","23h50"];
    const horSaturday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","22h20","23h50"];
    const horSunday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    
    useEffect(() => {
      },[count]);

    return <>
    
        <Row>
            <Col lg={{span:"12"}}>
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
                                        tarifj={15}
                                        tarifn={20}
                                        count={count}
                                    />
                                    <TarifRoom
                                        img="/img/BATTLE R.png"
                                        tarifj={15}
                                        tarifn={20}
                                        count={count}
                                    />
                                    <TarifRoom
                                        img="/img/CREATIVE R.png"
                                        tarifj={15}
                                        tarifn={20}
                                        count={count}
                                    />
                                </div>
                            </Col>
                        </Row>

                    </div>
                    <div className="tab-reservation">
                        
                        <div className="button-tarif">
                            <button  onClick={() => setDay(clamp(day-7,1,31))}>&lt;&lt;</button>
                            <h2>Du {day} au {day+7} décembre</h2>
                            <button onClick={() => setDay(clamp(day +7,1,24))}>&gt;&gt;</button>

                        </div>
                        <div className="tab">
                            <Row>
                                <Col lg="1">
                                    <div className="tab-left">
                                        <p>Mardi {day} Dec.</p>
                                        {(horTuesday).map((hor)=>{
                                                return <>
                                                    <button className="button-reser">{hor}</button>
                                                
                                                </>

                                            })}
                                    </div>
                                </Col>
                                <Col lg="1">
                                    <div className="tab-middle">
                                        <p>Mercredi {day+1} Dec.</p>
                                        {(horWednesday).map((hor)=>{
                                                return <>
                                                    <button className="button-reser">{hor}</button>
                                                
                                                </>

                                            })}
                                    </div>
                                </Col>
                                <Col lg="1">
                                    <div className="tab-middle">
                                        <p>Jeudi {day+2} Dec.</p>
                                        {(horThursday).map((hor)=>{
                                                return <>
                                                    <button className="button-reser">{hor}</button>
                                                
                                                </>

                                            })}
                                    </div>
                                </Col>
                                <Col lg="1">
                                    <div className="tab-middle">
                                        <p>Vendredi {day+3} Dec.</p>
                                        {(horFriday).map((hor)=>{
                                                return <>
                                                    <button className="button-reser">{hor}</button>
                                                
                                                </>

                                            })}
                                    </div>
                                </Col>
                                <Col lg="1">
                                    <div className="tab-middle">
                                        <p>Samedi {day+4} Dec.</p>
                                        {(horSaturday).map((hor)=>{
                                                return <>
                                                    <button className="button-reser">{hor}</button>
                                                
                                                </>

                                            })}
                                    </div>
                                </Col>
                                <Col lg="1">
                                    <div className="tab-middle">
                                        <p>Dimanche {day+5} Dec.</p>
                                        {(horSunday).map((hor)=>{
                                                return <>
                                                    <button className="button-reser">{hor}</button>
                                                
                                                </>

                                            })}
                                    </div>
                                </Col>

                            </Row>

                        </div>
                        
                    </div>
                </div>
                
            </Col>
        </Row>

    

    </>
}

export default ReservationAll;