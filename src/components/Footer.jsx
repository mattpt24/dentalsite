import React from "react";


export default function Footer() {
    return (
        <footer>
            <div className="footer_links">
            <a href="#about" className="footer_link">About</a>
            <a href="#services" className="footer_link">Services</a>
            <a href="#location" className="footer_link">Location</a>
            <a href="#contact" className="footer_link">Get In Touch</a>
            </div>
            <span>Website by mattPersellThompson</span><br/><br/>
            <span>&copy; 2022 Denpure Dental Care Clinic</span>
        </footer>
    )
}