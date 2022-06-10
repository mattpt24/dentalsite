import React, {useState} from "react";
import "../scss/components/sections/services.scss";
import Service1 from "./Services/Service1";
import Service2 from "./Services/Service2";
import Service3 from "./Services/Service3";
import Service4 from "./Services/Service4";



function Services () {

const [service, setService] = useState(<Service1 />);

const vineersClicked = () => {
    setService(<Service1/>);
    document.querySelector(".vineers-btn").classList.add("option-clicked");
    document.querySelector(".implants-btn").classList.remove("option-clicked");
    document.querySelector(".whitening-btn").classList.remove("option-clicked");
    document.querySelector(".facial_aesthetics-btn").classList.remove("option-clicked");


}

const implantsClicked = () => {
    setService(<Service2/>);
    document.querySelector(".implants-btn").classList.add("option-clicked");
    document.querySelector(".vineers-btn").classList.remove("option-clicked");
    document.querySelector(".whitening-btn").classList.remove("option-clicked");
    document.querySelector(".facial_aesthetics-btn").classList.remove("option-clicked");


}


const whiteningClicked = () => {
    setService(<Service3/>);
    document.querySelector(".whitening-btn").classList.add("option-clicked");
    document.querySelector(".vineers-btn").classList.remove("option-clicked");
    document.querySelector(".implants-btn").classList.remove("option-clicked");
    document.querySelector(".facial_aesthetics-btn").classList.remove("option-clicked");
}


const facialAestheticsClicked = () => {
    setService(<Service4/>);
    document.querySelector(".facial_aesthetics-btn").classList.add("option-clicked");
    document.querySelector(".vineers-btn").classList.remove("option-clicked");
    document.querySelector(".implants-btn").classList.remove("option-clicked");
    document.querySelector(".whitening-btn").classList.remove("option-clicked");

}


    return (
        <section id="services">
        <div className="services_main_container">
            <div className="services_padding_container">
            <p className="section_sml_title">WHAT DO WE DO?</p>
            <h1 className="section_title services_title">What we do best.</h1>
            <p className="services_description">Whatever your looking for, we got you covered. Our amazing team can assist you with any of the following treatments and procdeures. We offer comprehensive dental care both under the NHS and privately but some services are exclusively private such as: Orthodontics, Dental Implants, Cosmetic work and oral surgery by an oral surgeon.</p>


            <div className="services_selection">
                <a href="#0" onClick={vineersClicked} className="vineers-btn btn btn-accent">Veneers</a>
                <a href="#0" onClick={implantsClicked} className="implants-btn btn btn-accent">Invisalign</a>
                <a href="#0" onClick={whiteningClicked} className="whitening-btn btn btn-accent">Whitening</a>
                <a href="#0" onClick={facialAestheticsClicked} className="facial_aesthetics-btn btn btn-accent">Facial Aesthetics</a>
            </div>

            <div className="service_card_container">{service}</div>
            </div>
        </div>
        </section>
    )
}

export default Services;