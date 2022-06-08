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



    return(
        <nav className="nav_container">
            <div className="nav_left">
            <h3 className="nav_logo">Denpure<span style={{color: "#6454ff"}}>Dental</span></h3>

            <ul className="nav_list">
                <li><a rel="noreferrer" target="_blank" href="https://denpure.co.uk/" className="nav_link">About</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://denpure.co.uk/" className="nav_link">Services</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://denpure.co.uk/" className="nav_link">Location</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://denpure.co.uk/" className="nav_link support">Get In Touch</a></li>
            </ul>
            </div>

            <div className="nav_right">
                <a target="_blank" href="https://denpure.co.uk/" className="btn btn-dark get-in-touch-btn"><i class="phone-icon fa-solid fa-phone"></i>01895 678889</a>
            </div>
        </nav>
    )
}