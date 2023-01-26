import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import HomeParallax from '../component/HomeParallax.js';
import Banner from '../component/Banner.js';
import Card from '../component/Card.js';
import Regroup from '../component/Regroup-faq.js';



function Home() {
    return <div>
        <CollapsibleNavbar />
        <HomeParallax />
        <Banner
            theme="dark-room"
            title="Qu'est ce que la"
            logoImage="%PUBLIC_URL%/img/DARK ROOM (1).svg"
            description="Vous pensez ne pas avoir peur du noir ? Que rien ne pourra vous effrayer ? Vous avez tord. Avec la DARK ROOM, toutes vos peurs deviendront réelles et en rien de temps, il ne vous restera plus que vos jambes pour vous enfuir. Vous vous penser suffisament fort pour affronter vos peurs ? Franchissez donc le seuil de la DARK ROOM. Vous avez hâte d'y entrer mais dans le noir... Personne nous verra mourir."
            prezImg="../img/image 84.svg"
            linkHidden={true}
        />

        <Card/>

        <Regroup/>

        <Footer />
    </div>
}

export default Home;