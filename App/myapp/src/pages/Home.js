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
            theme="light-room"
            title="Qu'est ce que"
            description="uwu"
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