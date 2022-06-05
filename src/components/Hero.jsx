import React from "react";
import mobileImage from "../images/mobile-img.png";

function Hero() {
    return (
        <div className="hero_main_container">
            <div className="hero_padded_container">
                <div className="hero_content">
                <h1>Clear aligners for up to <span className="emphasised-txt">60% less</span> than braces.</h1>
                <h3>No regular in-person visits and straighter teeth in as little as 4-6 months for as low as £70.09 per month.</h3>
                <a target="_blank" href="http://denpure.co.uk" className="btn btn-white">Make A Booking</a>
                <img className="mobile-only-img" src={mobileImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;