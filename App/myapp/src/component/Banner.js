import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = (props) => {
    return <div className="banner">
        <div className="video-bubble">
            <iframe className={props.theme} src="https://www.youtube.com/embed/OHwrqgYP6OQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="banner-content">
            <h2>{props.title} <img src={props.logoImage} alt="Item logo" /></h2>
            <p className="room-description">{props.description}</p>
        </div>
        <div className="banner-link">
            <Link  to='/a-propos-de-nous'>DECOUVREZ {props.name} <AiOutlineArrowRight/></Link>
        </div>
    </div>
}

export default Banner;