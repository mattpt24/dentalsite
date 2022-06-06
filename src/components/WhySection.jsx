import React from "react";
import "../scss/components/sections/whysection.scss";
import Divider from "../components/Divider";

function WhySection() {
return (
<div className="why_main_container">
    <div className="why_padding_container">
        <p className="section_sml_title">WHY CHOOSE US?</p>
        <h2 className="section_title about_title">Why Choose Denpure?</h2>
        <p className="section_description">Join the millions who’ve discovered how easy it is to plan, track, and manage a low-carb Keto diet with Carb Manager.</p>

        <div class="why_reasons_container">

            <div class="why_reason">
                <div className="icon_container one_con">
                    <i class="one why_icon fa-solid fa-heart"></i>
                </div>
                <h3>Quality.</h3>
                <h4>Quality care under NHS/Private</h4>
            </div>


            <div class="why_reason reason2">
                <div className="icon_container two_con">
                    <i class="two team why_icon fa-solid fa-people-group"></i>
                </div>
                <h3>Caring.</h3>
                <h4>Very caring team of professionals</h4>
            </div>


            <div class="why_reason reason3">
                <div className="icon_container three_con">
                    <i class="three why_icon fa-solid fa-tooth"></i>
                </div>
                <h3>Qualified.</h3>
                <h4>Practical use of evidence based dentistry</h4>
            </div>


            <div class="why_reason reason4">
                <div className="icon_container four_con">
                    <i class="four why_icon fa-solid fa-lock"></i>
                </div>
                <h3>Privacy.</h3>
                <h4>Private treatment at very reasonable price</h4>
            </div>

        </div>
    </div>
    <Divider />
</div>
)
}


export default WhySection;