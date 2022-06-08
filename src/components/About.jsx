import React from "react";
import "../scss/components/sections/about.scss";

function About () {
    return (
        <div class="about_main_container">
            <div class="about_padding_container">
            <p className="section_sml_title">WHO ARE WE?</p>
            <h2 className="section_title about_title">Your dentist, Denpure.</h2>

            <div className="about-text">
                <p className="about_text_content"><span className="big-letter">A</span> warm welcome to Denpure dental care and implant centre located in the heart of Ickenham village, Uxbridge - our friendly and professional team will provide you with the service and care you deserve in a relaxed and comfortable atmosphere.</p>
                <p className="about_text_content">Here at the Denpure dental care and implant centre you will find a wide range of treatments under one roof for the whole family, ranging from routine check ups to dental implants, orthodontics (teeth straightening, invisible braces), and smile makeovers.</p>
           </div>
           </div>
        </div>
    )
}


export default About;