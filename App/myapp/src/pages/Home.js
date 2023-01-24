import Footer from '../component/Footer.js';
import Navbar from '../component/Navbar.js';
import { getUsers } from '../api/user.js';

function Home() {
    const users = getUsers();

    console.log(users);

    return <div>
        {
            users.map((user) => {{
                <div>user.firstname</div>
            }})
        }
        <Navbar />
        <Footer />
    </div>
}

export default Home;