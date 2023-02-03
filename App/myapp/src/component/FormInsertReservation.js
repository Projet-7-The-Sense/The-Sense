import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getReservation, InsertReservation } from "../api/reservation";
import { UserContext } from "../contexts/UserContext";
import { clamp } from "../helpers";
import PaypalCheckoutButton from '../component/PaypalCheckoutButton.js';

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
    const [payementWaiting, setPayementWaiting] = useState(null);
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(false);
    const [reserveData, setReserveData] = useState(null);

    useEffect(() => {
        // Display success page
        alert("Thank you for your purchase!");
        setPayementWaiting(null);
        reservate();
    }, [paidFor]);

    useEffect(() => {
        // Display error message
        alert(error);
    }, [error]);

    const handleApprove = (orderId) => {
        // Fullfill the order
    
        // If response is success
        setPaidFor(true);
        // Refresh user's account
    
        // if the response if error
        // alert the user of the error message
        setError("Your  payement was processed successfully!");
    };
    
    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);
    
        handleApprove(data.orderID);
    }

    useEffect(()=>{

    },[deleted]);

    const onSubmit = (data) => {
        const product = {
            description: data.room + " - " + data.player,
            price: priceTotal
        }
        setReserveData(data);
        setPayementWaiting(product);
    }

    const reservate = async () => {
      const res = await InsertReservation(reserveData);
      console.log(res);
      console.log(reserveData);

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
            <Link to="/mon-compte" className="warn"> Création de compte obligatoire</Link>
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
                    <input className="input-reservation" {...register("user")}  type='hidden' defaultValue={user.id} required />
                    <input className="input-reservation" {...register("pseudo")} placeholder="pseudo" required/>
                    <p>Date :</p>
                    <input className="input-reservation" {...register("date")} value={dayRes}  required />
                    <p> décembre</p>
                    <p>Horaire :</p>
                    <input className="input-reservation" {...register("hours")} value={horRes}  required />
                    <p>Salle :</p>
                    <input className="input-reservation" {...register("room")} value={props.room}  required />
                    <p>Nb de joueurs :</p>
                    <input className="input-reservation" {...register("player")} value={count}   required />  
                    <p>Prix :</p>             
                    <input className="input-reservation" {...register("price")} value={priceTotal}  required />
                    <p></p>
                    <button className="button-reservation" type="submit"><img src="/img/blackBouton.png"></img></button>
                    {payementWaiting &&
                        <div className="paypal-button-container">
                            <PaypalCheckoutButton product={payementWaiting} onApprove={onApprove} />
                        </div>
                    }
                    <p></p>
                    <Link className="red"to="/">annuler</Link>
                    </form>
                    <div className="button-tarif">
                    <button className="button" onClick={() => setCount(clamp(count-1,4,8))}>-</button>
                        <p>{count} joueurs</p>
                    <button onClick={() => setCount(clamp(count+1,4,8))}>+</button>

                    </div>

                    <p>{price} € /personne</p>
                    <p>Total :</p>
                    <p>{priceTotal} €</p>
                    <div className="info-res">
                        <h2 >INFORMATIONS IMPORTANTES</h2>
                        <img src="/img/Line 22.png"></img>
                        <p>La room que vous avez sélectionné est une room qui comporte certains passages physiques et/ou éprouvants. Cette room est donc déconseillée aux personnes cardiaques, sensibles, aux femmes enceintes et aux mineurs (un justificatif sera demandé).</p>
                        <p>Dans ce cadre, nous vous conseilllons de :</p>
                        <p>  - Prévoir des chaussures fermées</p>
                        <p>- Prévoir des vétements confortables pouvant être légérement salis </p>
                        <p>En arrivant sur place vous recevrez des consignes qu’il vous faudra respecter scrupuleusement pour votre sécurité.</p>
                        <p>  *The Sense décline toute responsabilité en cas de non respect de ces consignes.</p>
                    </div>

                    
                    
                </Col>                       
              </Row>
            </div>
        )}
        </>
        
    );
}