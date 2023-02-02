import Footer from '../component/Footer.js';
import Banner from '../component/Banner.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext.js';
import { Button } from 'react-bootstrap';


const AboutUs = () => {
    return (
        <>
        <CollapsibleNavbar/>
        
        <Banner
        theme="the-sense"
        title="The Sense, une idée novatrice"
        descrition="The Sense est né d'un projet d'école de quatre étudiants en école de commerce. Se basant sur une idée originaire des États-Unis, les quatre amis décidèrent d'adapter ce concept inédit au marché français en y ajoutant leurs idées novatrices. Mélant deux activités attractives, la Réalité Virtuel et les Escape Game, THE SENSE joint le meilleur des deux mondes pour vous proposer des expériences inédites et époustouflantes. N'hésitez plus et franchisser la frontière du réel."
        prezImg="img/image 42.svg"
        linkHidden={true}
            />
        
        <p>The Sense est une société formée par quatre étudiants en école de commerce qui détiennent la majorité des parts. Le restant étant la propriété de DreamAway, entreprise française spécialiste du milieu de la VR.</p>
        
        <div className='Presentation'>
            <h1>Qui sommes nous ?</h1>
            <div >
                <div >
                    <h2>CORDIER Colin</h2>
                    <p>Co-Fondateur THE SENSE et Directeur Général</p>
                    <p>"Nous avons décidé de réaliser notre rêve de gosse: rendre réel ce qui ne l'est pas."</p>
                    <p>- Colin CORDIER -</p>
                </div>
                <div>
                    <h2>VANBORRE Thibault</h2>
                    <p>Co-Fondateur THE SENSE et Responsable RH</p>
                    <p>"The Sense représente , pour moi, la concrétisation de 4 ans de travails et de passions."</p>
                    <p>- Thibault VANBORRE -</p>
                </div>
                <div >
                    <h2>URBAIN Eloëne</h2>
                    <p>Co-Fondatrice THE SENSE et Responsable Communication</p>
                    <p>"Je pense qu'il est important de réver dans la vie et The Sense permet de vivre ces rêves."</p>
                    <p>- Eloëne URBAIN -</p>
                </div>
                <div >
                    <h2>ZAABAT Bryce</h2>
                    <p>Co-Fondateur THE SENSE  et Responsable Marketing</p>
                    <p>The Sense permet à nos joueurs de vivrent une expérience époustouflante qui les marquera lontemps. Croyez-moi."</p>
                    <p>- Bryce ZAABAT -</p>
                </div>
            </div>
        </div>

        <div className="container">
            <h2>OÙ NOUS TROUVER ?</h2>
            <p>The Sense se trouve, pour le moment, exclusivement à Lyon (France) dans le 3ème arrondissement. Pour nous rejoindre, il suffit de prendre la ligne T2 du Tram arrêt de l'Université ou bien prendre le métro B station Place Guichard Bourse du Travail (100 mètres à pied).</p>
        </div>
        <iframe id="Google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5018395663483!2d4.846570815817648!3d45.76113207910556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5e4b5e0f67%3A0xed466e201cea076d!2s207%20Rue%20Duguesclin%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1674829015888!5m2!1sfr!2sfr">
        </iframe>

        <Footer/>
        </>
    );
}

export default AboutUs;