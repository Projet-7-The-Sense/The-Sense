import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import { getReservation, ReservationUser } from '../api/reservation.js';
import { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext.js';
import Col from 'react-bootstrap/esm/Col.js';
import Row from 'react-bootstrap/esm/Row.js';

 const Reservation = () => {
    const { user, setUser } = useContext(UserContext);
    const [reservation, setReservations]=useState([]);
    
    useEffect(()=>{
        const reservations =getReservation();
        reservations
        .then(result => setReservations(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    
    return <>
        {! user ? (
            <>
            <Redirect to="/"></Redirect>
            </>
        ):(
            <>
            <CollapsibleNavbar/>
            <div className="new-content-admin">
            <Row className='reservation-container'>
                <Col lg={{span:"8", offset:"2"}}>
                    <Row >
                        <Col lg="12">
                            <h2 className='title-reserv'>Mes réservations</h2>
                            
                                {
                                    reservation.map((reservation, key) => {
                                        if (reservation.user==user.id){
                                        return <>
                                        <div className="my-reserv">
                                            <h2 >C'EST PRET !</h2>
                                            <h2 className='red-page'>RECAPITULATIF DE VOTRE ACHAT</h2>
                                            <img src="/img/Line 22.png"></img>
                                            <h2>C'EST PRET !</h2>
                                            <h2>{reservation.room}</h2>
                                            <h2>{reservation.date}</h2>
                                            <p className='red-page'>à {reservation.hours}</p>
                                            <h2>{reservation.pseudo}</h2>
                                            <p className='red-page'>{reservation.player} Joueurs</p>
                                            <p>Prix total :</p>
                                            <h2>{reservation.price} €</h2>
                                            <p>Un mail de confirmation vous a été envoyé à l'adresse mail suivante : {reservation.user}</p>
                                            <p>En cas d'annulation, merci de nous contacter : </p>
                                            <p className='red-page'>- Par téléphone : 01 23 45 67 89</p>
                                            <p className='red-page'> - Par mail : gpasdidée@projet7.com</p>
                                            <p>*Seules les annulations jusqu'à 48h à l'avance seront remboursées</p>
                                            <p>Toute l'équipe de The Sense vous remercie pour votre réservation, nous avons hâte de vous (re)voir !</p>
                                            <img src="/img/Logo.png"></img>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        </>
                                        }
                                    })
                                }
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
        <Footer/>
        </div>
        </>
        )}
    </>
}

export default Reservation;