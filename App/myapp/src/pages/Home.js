import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import HomeParallax from '../component/HomeParallax.js';
import Banner from '../component/Banner.js';
import Card from '../component/Card.js';
import Regroup from '../component/Regroup-faq.js';
import CriticCarousel from '../component/CriticCarousel.js';
import ReservationAll from '../component/ReservationAll.js';

function Home() {
    return <div>
        <CollapsibleNavbar />
        <HomeParallax />
        <div id='banner'>
            <Banner
                
                theme="dark-room"
                title="Qu'est ce que la"
                logoImage="/img/DARK ROOM (1).svg"
                description="Vous pensez ne pas avoir peur du noir ? Que rien ne pourra vous effrayer ? Vous avez tord. Avec la DARK ROOM, toutes vos peurs deviendront réelles et en rien de temps, il ne vous restera plus que vos jambes pour vous enfuir. Vous vous penser suffisament fort pour affronter vos peurs ? Franchissez donc le seuil de la DARK ROOM. Vous avez hâte d'y entrer mais dans le noir... Personne nous verra mourir."
                prezImg="../img/image 84.svg"
                linkHidden={true}
            />

        </div>


        <Card
            image="img/image 2.svg" 
            player="2-6-8"   
            timer="40 MIN"
            title="Dark room"
            content="Wow c'est trop bien"
            slogan="The conjuring experience"
            age="Interdit aux moins de 18 ans"
        />
        <ReservationAll/>
        <CriticCarousel/>
        <Regroup/>
        <Footer />
    </div>
}

export default Home;