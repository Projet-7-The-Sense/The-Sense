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
            theme="the-sense"
            title="Qu'est ce que "
            logoImage="img/SENSE.svg"
            description="Préparez-vous pour une expérience unique qui vous  emmènera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité."
            prezImg="img/image 42.svg"
            linkHidden={false}
        />

        <Card/>

        <Regroup/>

        <Footer />
    </div>
}

export default Home;