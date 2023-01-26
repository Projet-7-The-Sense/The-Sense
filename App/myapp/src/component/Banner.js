import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const Banner = (props) => {
    return <>
        <div id='#banner' className={"banner-wrapper "+props.theme}>
            <div className="container">
                <div className="banner-flex">
                    <div className="banner-bubble">
                        <div className={"image-wrapper "+props.theme}>
                            <img src={props.prezImg} alt="Presentation Image" />
                        </div>
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title">{props.title}<img src={props.logoImage} alt="Item logo"/> ?</h2>
                        <p className="banner-description abel">{props.description}</p>
                        {!props.linkHidden &&
                            <Link className="banner-link link" to="./pages/AboutUs.js">
                                <div>Découvrez The SENSE</div><BsArrowRight />
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Banner;