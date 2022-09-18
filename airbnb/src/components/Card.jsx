import React from "react";
import img from "../img/katie-zaferes.png"
import imgS from "../img/star.png"


export default function Card(props){
  
   return <section className="card">
     <img src={props.image} className="cardImg"/>
        <div className="Stats" >
            <img src={props.starImg}   className="star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount})  • </span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="cardTitle">{props.title}</p>
        <p className="cardPrice"><span className="bold">From ${props.price}</span> / Person</p>

   </section>
}
