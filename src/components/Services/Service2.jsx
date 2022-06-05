import React from "react";
import "../../scss/components/sections/services.scss";


function Service2() {
    return(
        <div className="service_card">
            <div class="card_number">02</div>
            <div className="card_text_container">
                <div style={{margin: "40px 0", padding: "40px"}}>
            <h3 className="service_title">Invisalign.</h3>
            <p className="service_detail">The invisalign comes as a series of aligners which slowly move and align the teeth in correct position. On average every 4-6weeks patient is given next aligner to correct teeth position and during every subsequent visit progress is checked.</p>
            <p className="service_detail">Invisalign is a great way of treating teeth misalignment, but this may not be a feasible form of treatment for everyone. Therefore we strongly recommend booking a consultation with one of our dentists who can explain appropriate treatment options. Dr Roshani Dali and Dr Manika Malhotra provide Invisalign treatment at Denpure dental care.</p>
            <a className="btn btn-white" href="https://denpure.co.uk">Book Session</a>
            </div>
            </div>

            <div className="card_img_container">
                <img className="card_img" src="https://media.istockphoto.com/photos/woman-holding-transparent-teeth-aligner-picture-id1348218994?b=1&k=20&m=1348218994&s=170667a&w=0&h=zalqjBeUFPPzxxYVxMai81YVE8QRfGmLZ70lxWYDX8Y=" alt=""/>
            </div>
        </div>
    )
}

export default Service2;