import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';
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
        <CollapsibleNavbar />
        <Footer />
    </div>
}

export default Home;