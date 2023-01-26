import Footer from '../component/Footer.js';
import CollapsibleNavbar from '../component/CollapsibleNavbar.js';

import { useContext } from "react";
import { UserContext } from "../component/UserContext";

const Experiences = () => {
    return (
        <>
        <CollapsibleNavbar/>
        <h1>News</h1>
        <Footer/>
        </>
    );
}

export default Experiences;