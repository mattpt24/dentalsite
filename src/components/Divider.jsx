import React from "react";
import DividerImage from "../images/Divider.png";

const dividerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0"
}

function Divider() {
    return (
        <div style={dividerStyle} className="divider_container">
         <img style={{width: "150px"}} src={DividerImage} alt="Hello"/> 
        </div>
    )
}


export default Divider;