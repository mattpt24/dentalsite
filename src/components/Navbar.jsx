import React from "react";
import "../scss/components/navbar.scss";


export default function Navbar(){

window.addEventListener("scroll", () => {
const navbar = document.querySelector(".nav_container");
const topOfPage = window.scrollY;

if(topOfPage > 10) {
navbar.classList.add("navbar-fixed");
}

else {
navbar.classList.remove("navbar-fixed");
}
});

// const dropdownLinks = document.querySelectorAll(".dropdown_link");
// const dropdownLinksArray = Array.from(dropdownLinks);

// for(let i = 0; i < dropdownLinksArray.length; i++) {
//     dropdownLinksArray[i].addEventListener("click", () => {
//         document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");
//     });
// }


const activateDropdown = () => {
document.querySelector(".dropdown_nav_container").classList.add("dropdown-activated");
}

const closeDropdown = () => {
    document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");
}


return(
<section id="top">
    <nav className="nav_container">


    <div onClick={activateDropdown} class="burger_menu">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    </div>

        <div className="nav_left">
            <h3 className="nav_logo">Denpure<span style={{color: "#6454ff"}}>Dental</span></h3>

            <ul className="nav_list">
                <li><a rel="noreferrer" href="#about" className="nav_link">About</a></li>
                <li><a rel="noreferrer" href="#services" className="nav_link">Services</a></li>
                <li><a rel="noreferrer" href="#location" className="nav_link">Location</a></li>
                <li><a rel="noreferrer" href="#testimonials" className="nav_link">Testimonials</a></li>
                <li><a rel="noreferrer" href="#contact" className="nav_link support">Get In Touch</a></li>
            </ul>
        </div>

        <div className="nav_right">
            <a href="https://denpure.co.uk/" className="btn btn-dark get-in-touch-btn"><i
                    class="phone-icon fa-solid fa-phone"></i>01895 678889</a>
        </div>
    </nav>


    {/* DROPDOWN CONTAINER */}
    <div className="dropdown_nav_container">
    <div onClick={closeDropdown} class="close_icon">✕</div>

        <h3 className="nav_logo">Denpure<span style={{color: "#6454ff"}}>Dental</span></h3>

        <ul className="nav_list">
            <li><a tabindex="-1" onClick={()=>{document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");}} rel="noreferrer" href="#about" className="dropdown_link nav_link">About</a></li>
            <li><a tabindex="-1" onClick={()=>{document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");}} rel="noreferrer" href="#services" className="dropdown_link nav_link">Services</a></li>
            <li><a tabindex="-1" onClick={()=>{document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");}} rel="noreferrer" href="#location" className="dropdown_link nav_link">Location</a></li>
            <li><a tabindex="-1" onClick={()=>{document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");}} rel="noreferrer" href="#testimonials" className="dropdown_link nav_link">Testimonials</a></li>
            <li><a tabindex="-1" onClick={()=>{document.querySelector(".dropdown_nav_container").classList.remove("dropdown-activated");}} rel="noreferrer" href="#contact" className="dropdown_link nav_link support">Get In Touch</a></li>
        </ul>

        <div className="dropdown_contact_btn">
            <a tabindex="-1" href="tel:01895 678889" className="btn btn-dark get-in-touch-btn"><i
                    class="phone-icon fa-solid fa-phone"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01895 678889</a>
            <a tabindex="-1" href="mailto:info@denpure.co.uk" className="btn btn-light get-in-touch-btn"><i
                    class="phone-icon fa-solid fa-envelope"></i> &nbsp;info@denpure.co.uk</a>
        </div>

    </div>
</section>
)
}