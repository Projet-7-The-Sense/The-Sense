import Footer from '../component/Footer.js';
<<<<<<< HEAD
import Navbar from '../component/Navbar.js';
import { getUsers, insertUser } from '../api/user.js';
import { useState, useEffect } from 'react';
=======
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
import { getUsers } from '../api/user.js';
>>>>>>> 340e6b6b7094c765948a5c0616ac960f1a857bc6

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
<<<<<<< HEAD
        <Navbar />
        <p onClick={handleOnClick}>Prout</p>
        <h1>Liste de users</h1>
        <div>
            {
                users.map((user, key) => {
                    return <div key={key} className="uwu">{user.firstname}</div>
                })
            }
        </div>
=======
        {
            users.map((user) => {{
                <div>user.firstname</div>
            }})
        }
        <CollapsibleNavbar />
>>>>>>> 340e6b6b7094c765948a5c0616ac960f1a857bc6
        <Footer />
    </div>
}

export default Home;