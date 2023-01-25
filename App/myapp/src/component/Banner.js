import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = (props) => {
    return <>
        <div class={"banner-wrapper "+props.theme}>
            <div className="container">
                <div className="banner-flex">
                    <div className="banner-bubble">
                        <div className="image-wrapper">
                            <img src={props.prezImg} alt="Presentation Image" />
                        </div>
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title">{props.title}<img src={props.logoImage} alt="Item logo"/> ?</h2>
                        <p className="banner-description">{props.description}</p>
                        <Link to=""></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Banner;