import React from "react";
import quoteMarks from "../images/quotemarks.png";

export default function TestCard(props) {
    return (
        <div className="card_container">
            <img className="card_quotemarks" src={quoteMarks} alt="" />

            <div className="card_content">
            <img className="card_img" src={props.src} alt="Avatar of customer" />   
            <p className="card_quote">"{props.quote}"</p>

            <p><i style={{fontSize: "1.5rem", color: "#6454ff"}}class="fa-brands fa-google"></i>&nbsp;&nbsp;<i class="star-icon fa-solid fa-star"></i><i class="star-icon fa-solid fa-star"></i><i class="star-icon fa-solid fa-star"></i><i class="star-icon fa-solid fa-star"></i><i class="star-icon fa-solid fa-star"></i></p>

            <div className="card_person">
            <p className="card_name">{props.name}</p>
            <p className="card_age">{props.age}</p>
            </div>
            
            </div>
        </div>
    )
}