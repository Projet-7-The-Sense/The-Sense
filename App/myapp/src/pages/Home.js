import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import Banner from '../component/Banner.js';
import Card from '../component/Card.js';
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

    return <div>
        <CollapsibleNavbar />
        
        <Banner
            theme="the-sense"
            title="Qu'est ce que "
            logoImage="img/SENSE.svg"
            description="Préparez-vous pour une expérience unique qui vous  emmènera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en interragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité."
            prezImg="img/image 42.svg"
            linkHidden={false}
        />

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
        <Footer />
    </div>
}

export default Home;