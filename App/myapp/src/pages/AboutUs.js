import Footer from '../component/Footer.js';
import Banner from '../component/Banner.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { Checkbox, FormControlLabel } from '@mui/material';


function Personna(props){
    return <>
        <div className='perso'>
            <img src={props.img}></img>
            <h2>{props.name}</h2>
            <h3>{props.first}</h3>
            <h4>{props.work}</h4>
            <p>{props.desc}</p>
            <p>{props.quote}</p>
        </div>
    </>
}

const AboutUs = () => {
    return (
        <>
        <CollapsibleNavbar/>
        <div className='header-equip'>
            <div className="img-about">
                <img src="./img/Logo.png"></img>  
            </div>
            <div classname='bryce-de-nice'>
                <img className='et-tu-casses' src='./img/bryce.svg' alt='Bryce de Nice'/>
            </div>
            <div className='button-equipment'>
                <a href='#banner'><img src='./img/DECOUVRIR.svg' alt='button discover image'/></a>
            </div>
        </div>
        <Banner
                theme="the-sense"
                title="THE SENSE, UNE IDÉE NOVATRICE"
                logoImage="img/SENSE.svg"
                description="The Sense est né d un projet d école de quatre étudiants en école de commerce. Se basant sur une idée originaire des États-Unis, les quatre amis décidèrent d adapter ce concept inédit au marché français en y ajoutant leurs idées novatrices. Mélant deux activités attractives, la Réalité Virtuel et les Escape Game, THE SENSE joint le meilleur des deux mondes pour vous proposer des expériences inédites et époustouflantes. N hésitez plus et franchisser la frontière du réel."
                prezImg="img/image 42.svg"
                linkHidden={true}
                bryceHidden={false}
                vecteur="/img/Vector 37.svg"
            />
        <div className='personna-intro'>
            <div className="text-adaptative">
                <h2>Qui sommes nous ?</h2>
                <p>The Sense est une société formée par quatre étudiants en école de commerce qui détiennent la majorité des parts. Le restant étant la propriété de DreamAway, entreprise française spécialiste du milieu de la VR.</p>
            </div>
        </div>
        <div className='perso-all'>
                <Personna
                    img="img/image 116.png"
                    name="CORDIER "
                    first="Colin"
                    work="Co-Fondateur THE SENSE et Directeur Général"
                    desc="'Nous avons décidé de réaliser notre rêve de gosse: rendre réel ce qui ne l'est pas.'"
                    quote='- Colin CORDIER -'
                />
                <Personna
                    img="img/image 117.png"
                    name="VANBORRE"
                    first="Thibault"
                    work="Co-Fondateur THE SENSE et Responsable RH"
                    desc="'The Sense représente , pour moi, la concrétisation de 4 ans de travails et de passions.'" 
                    quote='- Thibault VANBORRE -'
                />
                <Personna
                    img="img/image 119.png"
                    name="URBAIN"
                    first="Eloëne"
                    work="Co-Fondatrice THE SENSE et Responsable Communication"
                    desc="'Je pense qu'il est important de réver dans la vie et The Sense permet de vivre ces rêves.'" 
                    quote= '- Eloëne URBAIN -'
                />
                <Personna
                    img="img/image 118.png"
                    name="ZAABAT"
                    first="Bryce"
                    work="Co-Fondateur THE SENSE  et Responsable Marketing"
                    desc="'The Sense permet à nos joueurs de vivrent une expérience époustouflante qui les marquera lontemps. Croyez-moi.'" 
                    quote='- Bryce ZAABAT -'
                />
        </div>
        <div className="text-adaptative">
            <h2>OÙ NOUS TROUVER ?</h2>
            <p>The Sense se trouve, pour le moment, exclusivement à Lyon (France) dans le 3ème arrondissement. Pour nous rejoindre, il suffit de prendre la ligne T2 du Tram arrêt de l'Université ou bien prendre le métro B station Place Guichard Bourse du Travail (100 mètres à pied).</p>
        </div>
        <Row className='localisation'>
            <Col className='gg-maps' lg={{ span: 5, offset: 1 }}>
                <iframe id="Google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5018395663483!2d4.846570815817648!3d45.76113207910556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5e4b5e0f67%3A0xed466e201cea076d!2s207%20Rue%20Duguesclin%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1674829015888!5m2!1sfr!2sfr">
                </iframe>
            </Col>
            <Col lg={{ span: 3, offset: 2 }}>
                <div className='hor-about'>
                <h2>NOS HORAIRES</h2>
                    <Row>
                        <Col className='right-hor-align'>
                            <p className='red-hor'>Lundi</p>
                            <p>Mardi</p>
                            <p>Mercredi</p>
                            <p>Jeudi</p>
                            <p>Vendredi</p>
                            <p>Samedi</p>
                            <p>Dimanche</p>
                        </Col>
                        <Col className='left-hor-align'>
                            <p className='red-hor'>FERME</p>
                            <p>10:00-22:00</p>
                            <p>10:00-22:00</p>
                            <p>10:00-22:00</p>
                            <p>10:00-01:00</p>
                            <p>10:00-01:00</p>
                            <p>10:00-22:00</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
        <div className="form-contact">
            <h2 className='text-adaptative'>NOUS CONTACTER</h2>
            <Form className="contact-first-padding">
                <Row className="mb-3" >
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="Name" placeholder="Nom" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Control type="Last Name" placeholder="Prémon" />
                    </Form.Group>
                </Row>
                <Row className="mb-3" >
                    <Form.Group controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3" >
                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" />
                    </Form.Group>
                </Row>
                <div className="submit-button"><Button id="contact-form"  variant="primary" type="submit"><div className="content amiko-bold">Envoyer</div></Button></div>
                <div className="extra abel">
                    Ou par numéro de Téléphone <div className="phone-number amiko-bold">+33 1 23 45 67 89</div>
                </div>
            </Form>
        </div>
        <Footer/>
        </>
    );
}

export default AboutUs;