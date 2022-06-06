import React from "react";
import "../scss/components/sections/location.scss";



function Location() {
return (
<div className="location_main_container">
    <div className="location_padding_container">

        <div className="location_left">
            <div className="location_left_content">
                <h1>Where Are We?</h1>
                <address>
                    77 Swakeleys Rd<br/>
                    Ickenham, Uxbridge<br/>
                    <span>UB10 8DQ, UK</span><br/>
                </address>
                <a href="https://www.google.com/maps/place/Denpure+-+Dental+Care+and+Implant+Centre/@51.5655459,-0.4497564,17z/data=!3m1!4b1!4m5!3m4!1s0x48766c481668bccd:0x3b1762b7f7b150bd!8m2!3d51.5655535!4d-0.4475601" target="_blank" className="btn btn-white">Get Directions</a>
            </div>
        </div>

        <div className="location_left">
        <div style={{maxWidth:"100%",overflow:"hidden",color:"red",width:"50vw",height:"60vh"}}><div id="embedmap-canvas" style={{height:"100%", width:"100%",maxWidth:"100"}}>
        <iframe style={{height:"100%",width:"100%",border:"0"}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=UB10+8DQ&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
        </div><a class="googlemap-code-enabler" rel="nofollow" href="https://dedicatedserver.expert" id="grabmaps-authorization">Dedicated Server Expert</a></div>
        </div>

    </div>
</div>
)
}


export default Location;