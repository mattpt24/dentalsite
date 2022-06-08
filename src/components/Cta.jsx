import React from "react";
import "../scss/components/cta.scss";

export default function Cta() {
    return (
        <div className="cta_main_container">
            <div className="cta_padding_container">
                <h3>Book a <strong>free</strong> consultation today!</h3>
                <p>It’s our goal to educate patients to prevent dental problems from happening in first place.</p>
                <div className="cta_btns">
                <a href="" className="btn btn-white">Book An Appointment</a>
                <a href="" className="btn btn-transparent">Get In Touch</a>
                </div>
            </div>
        </div>
    )
}