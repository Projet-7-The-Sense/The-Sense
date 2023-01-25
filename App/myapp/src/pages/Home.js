import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import { getUsers, insertUser } from '../api/user.js';
import { useState, useEffect } from 'react';

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersFetched = getUsers();
        usersFetched
            .then(result => setUsers(result))
            .catch(err => console.error("Erreur avec l'API:", err.message));
    });

    const handleOnClick = () => {
        insertUser('wbailleul@gaming.tech', 'jesuceantoine', 'William', 'Bailleul', '0764124156', 18);
    }

    return <div>
        <CollapsibleNavbar />
        <Banner
            theme="the-sense"
            title="Qu'est ce que"
            logoImage="img/SENSE.svg"
            description="Préparez-vous pour une expérience unique qui vous  emmènera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité."
            prezImg="img/image 123.svg"
        />

        <p onClick={handleOnClick}>Prout</p>
        <h1>Liste de users</h1>
        <div>
            {
                users.map((user, key) => {
                    return <div key={key} className="uwu">{user.firstname}</div>
                })
            }
        </div>
        <Footer />
    </div>
}

export default Home;