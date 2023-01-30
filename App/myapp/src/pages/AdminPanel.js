import CollapsibleNavbar from "../component/CollapsibleNavbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from "../component/Footer";
import { useEffect, useState, useContext } from "react";
import { getNews, DeleteNews } from "../api/news";
import { getUsers } from "../api/user";
import FormInsertNews from "../component/FormInserNews";
import { getReservation } from "../api/reservation";
import ExperienceUpdate, { getExperience } from "../api/experience";
import { UserContext } from '../contexts/UserContext';
import { Redirect } from "react-router-dom";

export default function Admin ()  {
    const [news, setNews] =useState([]);
    const [ deleted, setDelete ] = useState([]);
    const [users, setUser]=useState([]);
    const [reservations, setReservations]=useState([]);
    const { user } = useContext(UserContext);
    const [experiences, setExperiences]=useState([]);


    useEffect(()=>{
        const NewsFetched = getNews();
        NewsFetched
          .then((result) => setNews(result))
          .catch(error=>console.error("Erreur avec notre API :",error.message));
        const MailUser = getUsers();
        MailUser
            .then(result => setUser(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
        // const reservations =getReservation
        // reservations
        //     .then(result => setReservations(result))
        //     .catch(error=>console.error("Erreur avec notre API :",error.message));
        // const experiences =getExperience
        // experiences
        //     .then(result => setExperiences(result))
        //     .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleted]);
    return (<>
    {!user ?(
        <Redirect to="/"></Redirect>
    ):(
        <>
        <CollapsibleNavbar />
        <div className="img-admin">
            <h1>Panel Admin</h1>
        </div>
        <Row>
            <div className="new-content-admin">
                <Col lg={{span:"8", offset:"2"}}>
                    <h2>News</h2>
                    <div className="news-admin">
                        
                        {
                            news.map((news, key) => {
                                return <>
                                <h3>{news.title}</h3>
                                <button className="btn" onClick={()=>DeleteNews(news).then(()=>setDelete(deleted+1))}>DeleteNews</button>
                                </>

                            })
                        }
                        <FormInsertNews   deleted={deleted} setDelete={setDelete}/>
                    </div>
                </Col>
            </div>
        </Row>
        <Row>
            <Col lg={{span:"4", offset:"2"}}>
                <h2>Notre adresse email : ....</h2>
            </Col>
            <Col lg={{span:"4", offset:"0"}}>
                <h2>Adresse des utilisateurs</h2>
                {
                            users.map((user, key) => {
                                return <>
                                <h3>{user.email}</h3>
                                </>

                            })
                        }

            </Col>
        </Row>
        <Row>
            <div className="new-content-admin">
                <Col lg={{span:"8", offset:"2"}}>
                    <h2>Reservations</h2>
                    <div className="reservation-admin">
                        {
                            reservations.map((reservation, key) => {
                                return <>
                                <h3>{reservation.title}</h3>
                                </>

                            })
                        }
                    </div>
                </Col>
            </div>
        </Row>
        <Row>
            <div className="new-content-admin">
                <Col lg={{span:"8", offset:"2"}}>
                    <h2>Reservations</h2>
                    <div className="reservation-admin">
                        {
                            experiences.map((experience, key) => {
                                return <>
                                <h3>{experience.title}</h3>
                                <ExperienceUpdate deleted={deleted} setDelete={setDelete} exp={experience} />
                                </>

                            })
                        }
                    </div>
                </Col>
            </div>
        </Row>
    <Footer/>
    </>
    )}
    </>)}
    

