import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


import { getReservation, InsertReservation } from "../api/reservation";
import { UserContext } from "../contexts/UserContext";
import { clamp } from "../helpers";



export default function FormInsertReservation(props) {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [count, setCount]= useState(4);
    var exist=0;
    var price=20;
    var priceTotal=0;
    const [day, setDay]= useState(1);
    const [dayRes, setDayRes]= useState([]);
    const [horRes, setHorRes]= useState([]);
    const [deleted, setDelete] = useState(0);
    const horTuesday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horWednesday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horThursday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];
    const horFriday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","22h20","23h50"];
    const horSaturday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","22h20","23h50"];
    const horSunday=["10h20","11h50","13h20","14h50","16h20","17h50","19h20","20h50","-","-"];

    
    useEffect(()=>{

    },[deleted]);


    const onSubmit = async (data) => {      
      const res = await InsertReservation(data);
      console.log(res);
      console.log(data);
      

      setDelete(deleted+1);
      
    };

    if(count==6){
      price=(20*0.90);
      priceTotal=price*count;
    }else
    if(count==7){
      price=(20*0.80)
      priceTotal=price*count;
    }else if(count==8){
      price=(20*0.70)
      priceTotal=price*count;
    }else{
      priceTotal=price*count;
    }
    return(
        <>
        
        
        {!user?(
            <Link to="/mon-compte"> Création de compte obligatoire</Link>
        ):(

          <div className="tab-reservation">
              
              <div className="button-tarif">
                  <button  onClick={() => setDay(clamp(day-7,1,31))}>&lt;&lt;</button>
                  <h2>Du {day} au {day+7} décembre</h2>
                  <button onClick={() => setDay(clamp(day +7,1,24))}>&gt;&gt;</button>

              </div>
              <div className="tab-res">
                  <Row>
                      <Col lg={{span:"1"}}>
                          <div className="tab-left">
                              <p>Mardi {day} Dec.</p>
                              {(horTuesday).map((hor)=>{
                                


                                  return <>
                                          <button onClick={() => (setDayRes(day ),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                
                                  })}
                          </div>
                      </Col>
                      <Col lg={{span:"1",offset:"1"}}>
                          <div className="tab-middle">
                              <p>Mercredi {day+1} Dec.</p>
                              {(horWednesday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day ),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg={{span:"1",offset:"1"}}>
                          <div className="tab-middle">
                              <p>Jeudi {day+2} Dec.</p>
                              {(horThursday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day+2 ),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg={{span:"1",offset:"1"}}>
                          <div className="tab-middle">
                              <p>Vendredi {day+3} Dec.</p>
                              {(horFriday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day +3),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg={{span:"1",offset:"1"}}>
                          <div className="tab-middle">
                              <p>Samedi {day+4} Dec.</p>
                              {(horSaturday).map((hor)=>{
                                      return <>
                                          <button onClick={() => (setDayRes(day +4),setHorRes(hor))} className="button-reser">{hor}</button>
                                      
                                      </>

                                  })}
                          </div>
                      </Col>
                      <Col lg={{span:"1",offset:"1"}}>
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
                    <input className="insert" {...register("user")}  type='hidden' defaultValue={user.id} required />
                    <input className="insert" {...register("pseudo")} placeholder="pseudo" required/>
                    <p>Date :</p>
                    <input className="insert" {...register("date")} value={dayRes}  required />
                    <p> décembre</p>
                    <p>Horaire :</p>
                    <input className="insert" {...register("hours")} value={horRes}  required />
                    <p>Salle :</p>
                    <input className="insert" {...register("room")} value={props.room} type='hidden' required />
                    <input className="insert" {...register("player")} value={count}   required />               
                    <input className="insert" {...register("price")} value={priceTotal}  required />
                    <button  type="submit">Réserver</button>
                  </form>
                  <div className="button-tarif">
                    <button className="button" onClick={() => setCount(clamp(count-1,4,8))}>-</button>
                      <p>{count} joueurs</p>
                    <button onClick={() => setCount(clamp(count+1,4,8))}>+</button>

                  </div>

                  <p>{price} €/personne</p>
                  <p>Total :</p>
                  <p>{priceTotal} €</p>
                </Col>                       
              </Row>
            </div>
        )}
        </>
        
    );
}