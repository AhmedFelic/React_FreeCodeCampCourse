import React from "react";

import imgP from "../img/phone-icon.png"
import imgM from "../img/mail-icon.png"



export default function Contact(props){
    return(
        <div className="contact-card">
        <img src={props.img}/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src={imgP} />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src={imgM} />
            <p>{props.mail}</p>
        </div>
    </div>
    )
}