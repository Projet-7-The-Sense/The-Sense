import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import HomeParallax from '../component/HomeParallax.js';
import Banner from '../component/Banner.js';
import Card from '../component/Card.js';
import Regroup from '../component/Regroup-faq.js';
import CriticCarousel from '../component/CriticCarousel.js';
import ReservationAll from '../component/ReservationAll.js';
import NewsSmallCard from '../component/NewsSmallCard';
import { useEffect, useState } from 'react';
import { getNews } from '../api/news.js';
import PaypalCheckoutButton from '../component/PaypalCheckoutButton.js';

function Home() {
    const [news, setNews] =useState([]);

    useEffect(()=>{
        const NewsFetched = getNews();
        NewsFetched
          .then((result) => setNews(result))
          .catch(error=>console.error("Erreur avec notre API :",error.message));

    },[]);
    // const product = {
    //     description: "Dark room",
    //     price: 18
    // }

    return <div>
        <CollapsibleNavbar />
        <HomeParallax />
        <div>
            <Banner
                theme="dark-room"
                title="Qu'est ce que la"
                logoImage="/img/DARK ROOM (1).svg"
                description="Vous pensez ne pas avoir peur du noir ? Que rien ne pourra vous effrayer ? Vous avez tord. Avec la DARK ROOM, toutes vos peurs deviendront réelles et en rien de temps, il ne vous restera plus que vos jambes pour vous enfuir. Vous vous penser suffisament fort pour affronter vos peurs ? Franchissez donc le seuil de la DARK ROOM. Vous avez hâte d'y entrer mais dans le noir... Personne nous verra mourir."
                prezImg="/img/image 84.svg"
                linkHidden={true}
            />
        </div>
        <div className='best'>
            <div className="title-equip">
                <h2>LA RÉALITÉ À PORTÉE DE MAIN</h2>
                <p>Vous rêvez de voyager, de frissoner ou tout simplement de vivre une expérience unique ? Explorez nos univers entre amis ou en famille et franchissez la frontière de la réalité. Plusieurs dimensions s’offrent à vous, vous donnant accès à de nombreuses expériences. </p>
            </div>
            <div className="title-equip">
                <h2>NOS EXPÉRIENCES LES PLUS APPRÉCIÉES</h2>
            </div>
            <Card
                image="img/image 44.png" 
                player="2-6-8"   
                timer="60-90 MIN"
                title="LIGHT ROOM"
                content="Shangri-La la cité mythique, symbole de paix, de prospérité et de magnificence. Personne n'a apparemment pu se rendre en ce lieu depuis des décennies ou prouver son existence, du moins depuis votre découverte ! Aventurez-vous au plus profond des légendes, entrez dans la cité de Z avec votre équipe et explorez les lieux à la recherche de Percy Fawcett."
                slogan="SHANGRI-LA : LA CITÉ PERDUE DE Z"
                home="home"
                
            />

            {/* <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
            </div> */}

            <Card
                image="img/image 2.svg" 
                player="2 à 4"   
                timer="45-60 MIN"
                title="DARK ROOM"
                content="Revivez l'histoire d'un chef d'oeuvre cinématographique au travers d’une expérience aussi bien réaliste qu'immersive. Rassemblez ce qu'il vous reste de courage, les inspecteurs Ed et Loren Warren ont besoin de vous. Un malheur hante la maison de ces derniers et vous ne pouvez vous en échapper sans sacrifices. Serez-vous à la hauteur de ce qui vous attend ? Bonne chance, vous en aurez besoin !"
                slogan="The conjuring experience"
                age="Interdit aux moins de 18 ans"
                home="home"
            />
            <Card
                image="img/image 3.svg" 
                player="2-6-8"   
                timer="40 MIN"
                title="BATTLE ROOM"
                content="Sentez votre cœur battre, votre souffle se couper, votre concentration monter... Enrôlez des joueurs, formez votre équipe et préparez vous au combat ! Arrachez la victoire à vos adversaires à travers une bataille dans des décors et des 'maps' des plus immersives. En équipe de 4 ou 5 voyez lesquels d’entre vous sont digne de remporter le trophée."
                slogan="ULTIMATE FIGHT"
                home="home"
            />
            <div className="title-equip">
                <h2>VOUS EN VOULEZ TOUJOURS PLUS ? </h2>
            </div>
            <Card
                image="img/Image.png" 
                player="Votre choix"   
                timer="Votre choix"
                title="CREATIVE ROOM"
                content="Vous en avez marre des expériences répétitives ! Vous êtes à la recherche d'une toute nouvelle expérience en réalité virtuelle ? Alors venez créer votre propre expérience avec notre tout nouveau système de création virtuelle ! Vous nous exposez votre idée et votre univers et nous le mettons en oeuvre rien que pour vous ! N'attendez plus, c'est désormais votre création, votre univers, votre expérience, votre SENSE !"
                slogan="CRÉEZ VOTRE PROPRE EXPÉRIENCE"
                home="home"
            />
        </div>

        <ReservationAll/>
        <div className="title-equip">
                <h2>LES NEWS DU MOIS</h2>
            </div>
        <div className="news-content">
            <div className="container">
        {
                            news.map((newste, key) => {
                                if(newste.size=="SmallCard"){
                                    return <>
                                    <NewsSmallCard
                                    title={newste.title}
                                    paragraph={newste.text}
                                    preview={newste.image}
                                />
                                        
                                </>

                                }else{
                                    return <>   
                                </>
                                }


                            })
                        }
            </div>
        </div>
        <CriticCarousel/>
        <div id='faq'>
            <Regroup/>
        </div>
        
        <Footer />
    </div>
}

export default Home;