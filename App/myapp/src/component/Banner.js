import React from "react";

const Banner = (props) => {
    return <div className="banner">
        <div className="video-bubble">
            <iframe className={props.theme} src="https://www.youtube.com/embed/OHwrqgYP6OQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="banner-content">
            <h2>{props.title} <img src={props.logoImage} alt="Item logo" /></h2>
            <p className="room-description">{props.description}</p>
        </div>
    </div>
}

export default Banner;