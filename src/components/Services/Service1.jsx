import React from "react";
import "../../scss/components/sections/services.scss";
import "../../scss/base/variables.scss";


function Service1() {
    return(
        <div className="service_card">
            <div class="card_number">01</div>
            <div className="card_text_container">
                <div style={{margin: "40px 0", padding: "40px"}}>
            <h3 className="service_title">Veneers.</h3>
            <p className="service_detail">A veneer is a thin layer of porcelain made to fit over the front surface of a tooth to give cosmetic appearance to a compromised tooth. Composite, porcelain and zirconia materials are used to make veneers. Veneers can improve the colour, shape and position of teeth. A precise shade is chosen to give the right colour.</p>
            <p className="service_detail">Before implanting Vineers a consultation is required, book a session below to get a free consulation with one of our amazing team.</p>
            <a className="btn btn-white" href="https://denpure.co.uk">Book Session</a>
            </div>
            </div>

            <div className="card_img_container">
                <img className="card_img" src="https://media.istockphoto.com/photos/closeup-of-dentist-chooses-right-shade-of-implants-during-dental-picture-id1314828846?b=1&k=20&m=1314828846&s=170667a&w=0&h=XDKxU_Mo_ARbSr6cYWYMSSZsGZUbrH6fb2wAIt0TkVk=" alt=""/>
            </div>
        </div>
    )
}

export default Service1;