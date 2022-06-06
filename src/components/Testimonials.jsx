import React from "react";
import "../scss/components/sections/testimonials.scss";
import TestCard from "./TestCard";
import Reviews from "../Reviews";

function Testimonials() {
    return (
        <div className="testimonial_main_container">
            <div className="testimonial_padding_container">  
            <p className="section_sml_title">WHAT PEOPLE SAY</p>
            <h1 className="section_title services_title">Hear what people have to say.</h1>

            <div className="testimonial_card_section">

                <TestCard 
                quote={Reviews[2].quote}
                name={Reviews[2].name}
                age={Reviews[2].age}
                src={Reviews[2].src}
                />

                <TestCard 
                quote={Reviews[2].quote}
                name={Reviews[2].name}
                age={Reviews[2].age}
                src={Reviews[2].src}
                />


               <TestCard 
                quote={Reviews[2].quote}
                name={Reviews[2].name}
                age={Reviews[2].age}
                src={Reviews[2].src}
                />

                <TestCard 
                quote={Reviews[2].quote}
                name={Reviews[2].name}
                age={Reviews[2].age}
                src={Reviews[2].src}
                />

                <TestCard 
                quote={Reviews[2].quote}
                name={Reviews[2].name}
                age={Reviews[2].age}
                src={Reviews[2].src}
                />


                <TestCard 
                quote={Reviews[2].quote}
                name={Reviews[2].name}
                age={Reviews[2].age}
                src={Reviews[2].src}
                />

            </div>

            <center>
            <a className="read-more btn btn-white" target="_blank" href="https://www.google.com/search?q=google+reviews+denpure&rlz=1C1CHBF_en-GBGB973GB973&oq=google+reviews+denpure&aqs=chrome..69i57j69i64.4006j0j7&sourceid=chrome&ie=UTF-8#lrd=0x48766c481668bccd:0x3b1762b7f7b150bd,1,,,">Read More</a>
            </center>
            </div>

            
        </div>
    )
}

export default Testimonials;