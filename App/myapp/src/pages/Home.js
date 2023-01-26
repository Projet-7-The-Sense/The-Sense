import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import HomeParallax from '../component/HomeParallax.js';
import Banner from '../component/Banner.js';
import Card from '../component/Card.js';
import { useContext } from 'react';
import { UserContext } from '../component/UserContext.js';

function Home() {
    const { user, setUser } = useContext(UserContext);

    return <div id="banner">
        <CollapsibleNavbar />
        <HomeParallax />
        <Banner
            theme="the-sense"
            title="Qu'est ce que "
            logoImage="./img/SENSE.svg"
            description="Préparez-vous pour une expérience unique qui vous  emmènera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité."
            prezImg="./img/image 42.svg"
            linkHidden={false}
        />

        <pre>{JSON.stringify(user, null, 2)}</pre>

        {user != null ?
            (
                <button onClick={() => {
                    setUser(null);
                }}>Log out</button>
            )
            : (
                <button onClick={() => {
                    setUser({
                        id:"avollet@gaming.tech",
                        firstname:"Antoine",
                        lastname:"Vollet",
                        password:"Cookie Clicker"
                    });
                }}>Login</button>
            )
        }
        
        <Card/>

        {/* <Footer /> */}
    </div>
}

export default Home;