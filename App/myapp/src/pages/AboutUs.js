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
        <Footer/>
        <Banner
        theme="the-sense"
        title="Qu'est ce que"
        logoImage="img/SENSE.svg"
        descrition="Présentation-vous pour une expérience unique qui vous emmène dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité."
        prezImg="img/image 42.svg"
        linkHidden={false}
            />
        <h1>Qui sommes nous ?</h1>
        <p>The Sense est une société formée par quatre étudiants en école de commerce qui détiennent la majorité des parts. Le restant étant la propriété de DreamAway, entreprise française spécialiste du milieu de la VR.</p>
        
        <div class="container-a">

            <div class="row">

                <div class="col">

                    <h2>CORDIER Colin</h2>
                    <p>Co-Fondateur THE SENSE et Directeur Général</p>
                    <p>"Nous avons décidé de réaliser notre rêve de gosse: rendre réel ce qui ne l'est pas."</p>
                    <p1>- Colin CORDIER -</p1>

                </div>

                <div class="col">

                    <h2>VANBORRE Thibault</h2>
                    <p>Co-Fondateur THE SENSE et Responsable RH</p>
                    <p>"The Sense représente , pour moi, la concrétisation de 4 ans de travails et de passions."</p>
                    <p1>- Thibault VANBORRE -</p1>

                </div>

                <div class="col">

                    <h2>URBAIN Eloëne</h2>
                    <p>Co-Fondatrice THE SENSE et Responsable Communication</p>
                    <p>"Je pense qu'il est important de réver dans la vie et The Sense permet de vivre ces rêves."</p>
                    <p1>- Eloëne URBAIN -</p1>

                </div>

                <div class="col">

                    <h2>ZAABAT Bryce</h2>
                    <p>Co-Fondateur THE SENSE  et Responsable Marketing</p>
                    <p>The Sense permet à nos joueurs de vivrent une expérience époustouflante qui les marquera lontemps. Croyez-moi."</p>
                    <p1>- Bryce ZAABAT -</p1>


                </div>

            </div>

        </div>

        <div class="container">
            <h2>OÙ NOUS TROUVER ?</h2>
            <p>The Sense se trouve, pour le moment, exclusivement à Lyon (France) dans le 3ème arrondissement. Pour nous rejoindre, il suffit de prendre la ligne T2 du Tram arrêt de l'Université ou bien prendre le métro B station Place Guichard Bourse du Travail (100 mètres à pied).</p>
        </div>

        <iframe id="Google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5018395663483!2d4.846570815817648!3d45.76113207910556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5e4b5e0f67%3A0xed466e201cea076d!2s207%20Rue%20Duguesclin%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1674829015888!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>


        </>
    );
}

export default AboutUs;