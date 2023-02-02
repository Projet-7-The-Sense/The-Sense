import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { InsertReservation } from "../api/reservation";
import { UserContext } from "../contexts/UserContext";
import { clamp } from "../helpers";

function TarifRoom(props){
  var tarif=1;
  if (props.count==5){
      tarif=0.90;
  }else if (props.count==6){
      tarif=0.90;
  }else if (props.count==7){
      tarif=0.80;
  }else if (props.count==8){
      tarif=0.70;
  }
  return <>
  </>
};

export default function FormInsertReservation(props) {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [count, setCount]= useState(4);
    const [day, setDay]= useState(1);
    const [dayRes, setDayRes]= useState([]);
    const [horRes, setHorRes]= useState([]);
    const horTuesday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horWednesday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horThursday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horFriday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","22h20","23h50"];
    const horSaturday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","22h20","23h50"];
    const horSunday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];

    useEffect(() => {
    },[dayRes]);
    const onSubmit = async (data) => {      
      const res = await InsertReservation(data);
      console.log(res);

      props.setDelete(props.deleted+1)
    };
    return(
        <>
        
        
        {!user?(
            <p>Connexion indisponible</p>
        ):(

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
                                          <button onClick={() => (setDayRes(day ),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg="1">
                          <div className="tab-middle">
                              <p>Mercredi {day+1} Dec.</p>
                              {(horWednesday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day ),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg="1">
                          <div className="tab-middle">
                              <p>Jeudi {day+2} Dec.</p>
                              {(horThursday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day+2 ),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg="1">
                          <div className="tab-middle">
                              <p>Vendredi {day+3} Dec.</p>
                              {(horFriday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day +3),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg="1">
                          <div className="tab-middle">
                              <p>Samedi {day+4} Dec.</p>
                              {(horSaturday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day +4),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg="1">
                          <div className="tab-middle">
                              <p>Dimanche {day+5} Dec.</p>
                              {(horSunday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day +5),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>

                  </Row>

              </div>

              <Row>
                <Col lg={{span:8, offset:"2"}} className="form-insert">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="insert" {...register("user")} placeholder="Name" type='hidden' defaultValue={user.id} required />
                    <input className="insert" {...register("pseudo")} placeholder="pseudo" required/>
                    <input className="insert" {...register("date")} defaultValue={dayRes } placeholder={dayRes} equired />
                    <input className="insert" {...register("hours")} defaultValue={horRes} placeholder={horRes} required />
                    <input className="insert" {...register("room")} defaultValue={props.room} type='hidden' required />
                    <select className="insert" {...register("player")}>
                      <option >4 joueurs</option>
                      <option >5 joueurs</option>
                      <option >6 joueurs</option>
                      <option >7 joueurs</option>
                      <option >8 joueurs</option>
                    </select>
                    <input className="insert" {...register("price")} defaultValue={count} type='hidden' required />
                    <button  type="submit">Réserver</button>
                  </form>
                </Col>                       
              </Row>
            </div>
        )}
        </>
        
    );
}