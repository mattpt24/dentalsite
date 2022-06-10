import React from "react";
import Divider from "../components/Divider";
import "../scss/components/sections/footer.scss";
import Footer from "./Footer";



export default function Contact() {
    
return(
    <section id="contact">
<div className="contact_main_container">
    <div className="contact_padding_container">
        <div className="contact_intro_text">
            <p className="section_sml_title">GET IN TOUCH</p>
            <h2 className="section_title about_title">We'd love to hear from you!</h2>
            <p className="section_description">Whether your looking to book a procedure or recieve advice from a member
                of our amazing team, we're always happy to assist you! Submit your requests using the form below, and
                we'll get back to you as soon as we can!</p>
        </div>

        <div className="form_main_container">
            <form autocomplete="off" action="https://formsubmit.co/matthew@bpl-business.com" method="POST">
                <input type="text" name="First Name" required placeholder="First Name" />
                <input type="textarea" name="Last Name" required placeholder="Last Name" />
                <input type="text" name="Message" required placeholder="Your message..." />
                <input type="email" name="Email" required placeholder="Email" />
                <button className="btn btn-dark" type="submit"><a style={{color: "white"}} href="#0">Send Message</a></button>
            </form>
        </div>

        <Divider />


        <div className="icons_container">
            <p className="section_sml_title stay_in_touch">STAY IN TOUCH</p>

            <div className="icons_row">

                <a target="_blank" href="https://www.facebook.com/denpuredental/">
                    <div className="icon_box">
                        <i class="icon fa-brands fa-facebook-f"></i>
                    </div>
                </a>


                <a target="_blank" href="https://twitter.com/denpuredentist">
                    <div className="icon_box">
                        <i class="icon fa-brands fa-twitter"></i>
                    </div>
                </a>

                <a target="_blank" href="https://www.linkedin.com/company/denpure-dental-care-implant-centre/about/">
                    <div className="icon_box">
                        <i class="icon fa-brands fa-linkedin-in"></i>
                    </div>
                </a>

                
                <a target="_blank" href="mailto:info@denpure.co.uk">
                    <div className="icon_box">
                    <i class="icon fa-solid fa-envelope"></i>
                    </div>
                </a>


                
                <a target="_blank" href="tel:01895678889">
                    <div className="icon_box">
                    <i class="icon fa-solid fa-phone"></i>
                    </div>
                </a>

            </div>
        </div>

    </div>
    <Footer />
</div>
</section>
)
}