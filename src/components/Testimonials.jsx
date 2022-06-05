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
            </div>

            
        </div>
    )
}

export default Testimonials;