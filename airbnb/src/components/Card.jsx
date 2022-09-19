import React from "react";
import img from "../img/katie-zaferes.png"
import imgS from "../img/star.png"


export default function Card(props){
  
   let text;
   if (props.item.openSpots === 0){      
      text = "Sold Out";
   }else if(props.item.location === "Online"){
      text = "Online";
   }
  
   

   return <section className="card">
     {text  && <div className="badge">{text}</div>}
     <img src={props.item.coverImg} className="cardImg"/>
        <div className="Stats" >
            <img src={imgS}   className="star" />
            <span>{props.item.rating}</span>
            <span className="gray">({props.item.stats.reviewCount})  • </span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p className="cardTitle">{props.item.title}</p>
        <p className="cardPrice"><span className="bold">From ${props.item.price}</span> / Person</p>

   </section>
}
