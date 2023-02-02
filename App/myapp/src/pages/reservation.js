 import Footer from '../component/Footer.js';
 import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
 import Banner from '../component/Banner.js';
 import EquipmentsContent from '../component/EquipementsContent.js';
 import CriticCarousel from '../component/CriticCarousel.js';
 import { getReservation, ReservationUser } from '../api/reservation.js';
 import { useContext, useState } from 'react';
 import { Redirect } from 'react-router-dom';
 import { UserContext } from '../contexts/UserContext.js';
import Col from 'react-bootstrap/esm/Col.js';
import Row from 'react-bootstrap/esm/Row.js';

 const Reservation = () => {
    const { user, setUser } = useContext(UserContext);
    const [reservation, setReservations]=useState([]);
    const reservations =getReservation();
    reservations
        .then(result => setReservations(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    
    return <>
        {! user ? (
            <>
            <Redirect to="/"></Redirect>
            </>
        ):(
            <>
            <CollapsibleNavbar/>
            <div className="new-content-admin">
            <Row>
                <Col lg={{span:"8", offset:"2"}}>
                    <h2>Reservations</h2>
                    <div className="news-admin">
                        {
                            reservation.map((reservation, key) => {
                                if (reservation.user==user.id){

                                
                                return <>
                                <Row>
                                    <Col lg="2">
                                        <p>{reservation.user}</p>
                                    </Col>
                                    <Col lg="2">
                                        <p>{reservation.pseudo}</p>
                                    </Col>
                                    <Col lg="2">
                                        <p>{reservation.date}</p>
                                    </Col>
                                    <Col lg="2">
                                        <p>{reservation.hours}</p>
                                    </Col>
                                    <Col lg="2">
                                        <p>{reservation.player}</p>
                                    </Col>
                                    <Col lg="2">
                                        <p>{reservation.room}</p>
                                    </Col>
                                </Row>
                                
                                
                                
                                
                                
                                
                                </>
                                }
                            })
                        }
                    </div>
                </Col>
            </Row>
        </div>
        <Footer/>
        </>
        )}
    </>
}

export default Reservation;