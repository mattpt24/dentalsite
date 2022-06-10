import React from "react";
import "../scss/components/sections/testimonials.scss";
import TestCard from "./TestCard";
import {Reviews} from "../Reviews";


function Testimonials() {

return (
    <section id="testimonials">
<div className="testimonial_main_container">
    <div className="testimonial_padding_container">
        <p className="section_sml_title">TESTIMONIALS</p>
        <h1 className="section_title services_title">Hear what people have to say.</h1>

        <div id="reset_cards"></div>

        <div className="testimonial_card_section">
            <TestCard quote={Reviews[0].quote} name={Reviews[0].name} age={Reviews[0].age} src={Reviews[0].src} />
            <TestCard quote={Reviews[1].quote} name={Reviews[1].name} age={Reviews[1].age} src={Reviews[1].src} />
            <TestCard quote={Reviews[2].quote} name={Reviews[2].name} age={Reviews[2].age} src={Reviews[2].src} />
        </div>


        <div className="testimonial_card_section extend-cards">
        <TestCard quote={Reviews[3].quote} name={Reviews[3].name} age={Reviews[3].age} src={Reviews[3].src} />
        <TestCard quote={Reviews[4].quote} name={Reviews[4].name} age={Reviews[4].age} src={Reviews[4].src} />
        <TestCard quote={Reviews[5].quote} name={Reviews[5].name} age={Reviews[5].age} src={Reviews[5].src} />
        <TestCard quote={Reviews[6].quote} name={Reviews[6].name} age={Reviews[6].age} src={Reviews[6].src} />
        <TestCard quote={Reviews[7].quote} name={Reviews[7].name} age={Reviews[7].age} src={Reviews[7].src} />
        <TestCard quote={Reviews[8].quote} name={Reviews[8].name} age={Reviews[8].age} src={Reviews[8].src} />
        </div>

    </div>
    <div class="btn_container">
    
    <a onClick={ () => {
   if(document.querySelector(".read-more").innerText === "Read More") {
      document.querySelector(".extend-cards").classList.add("more-cards");
      document.querySelector(".read-more").innerText = "Show Less";
   }

   else {
    document.querySelector(".extend-cards").classList.remove("more-cards");
    document.querySelector(".read-more").innerText = "Read More";
    document.querySelector(".read-more").setAttribute("href", "#reset_cards")
   }
}}  className="read-more btn btn-white">Read More</a>
    <a  className="btn btn-transparent" target="_blank" href="https://bit.ly/3mvbH2n">View All</a>
    </div>


</div>
</section>
)
}

export default Testimonials;