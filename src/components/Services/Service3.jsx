import React from "react";
import "../../scss/components/sections/services.scss";


function Service3() {
    return(
        <div className="service_card">
            <div class="card_number">03</div>
            <div className="card_text_container">
                <div style={{margin: "40px 0", padding: "40px"}}>
            <h3 className="service_title">Whitening.</h3>
            <p className="service_detail">This is a procedure of making the colour of teeth lighter with professional whitening products. This is very conservative approach to try making teeth go lighter. Every individual responds differently but generally teeth go 4-5 shades lighter is product used correctly. Teeth can go temporarily sensitive. Click here for more information on teeth whitening.</p>
            <p className="service_detail">Thorough clean and polish of teeth followed by oral hygiene education/instructions. Some patients require deep cleaning and root planing for the better gum health subject to their gum condition, such deep clean is often done under local anaesthetic.</p>
            <a className="btn btn-white" href="https://denpure.co.uk">Book Session</a>
            </div>
            </div>

            <div className="card_img_container">
                <img className="card_img" src="https://media.istockphoto.com/photos/beautiful-caucasian-woman-with-perfect-smile-whitening-her-teeth-picture-id1352038811?b=1&k=20&m=1352038811&s=170667a&w=0&h=eP_LzfUbTtPSdEP-JuvEQcc0AF9NKYNz9pWvY4l4Cos=" alt=""/>
            </div>
        </div>
    )
}

export default Service3;