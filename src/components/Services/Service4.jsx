import React from "react";
import "../../scss/components/sections/services.scss";


function Service4() {
    return(
        <div className="service_card">
            <div class="card_number">04</div>
            <div className="card_text_container">
                <div style={{margin: "40px 0", padding: "40px"}}>
            <h3 className="service_title">Facial Aesthetics.</h3>
            <p className="service_detail">At Denpure Dental Care, we provide Facial Aesthetics to our patients in Ickenham and surrounding areas. Both Dr Manika Malhotra and Dr Angela Simoes offer wrinkle reduction treatment.</p>
            <p className="service_detail">As we age, skin loses its elasticity, and dynamic wrinkles begin to form. Hyperactivity of the facial expression muscles often results in the development of deep frown lines, forehead lines and crow’s feet. At Denpure, we can help to rejuvenate these features to give you the confidence to look and feel younger.</p>

            <a className="btn btn-white" href="https://denpure.co.uk">Book Session</a>
            </div>
            </div>

            <div className="card_img_container">
                <img className="card_img" src="https://media.istockphoto.com/photos/closeup-portrait-of-young-woman-standing-with-naked-shoulders-and-picture-id1249362060?b=1&k=20&m=1249362060&s=170667a&w=0&h=-MgU7PXwL6TmRZlk6mVB02dV9DJIqfKhHPHxfnnDsVg=" alt=""/>
            </div>
        </div>
    )
}

export default Service4;