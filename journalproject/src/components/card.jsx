import React from "react";

export default function Card(props){
    return(
    
        <section className="cardSection">
             <img src={props.item.imageUrl} className="img1"></img>
             <div class="naslov">
                <div class="topMargin"></div>
                <span className="locatName">{props.item.location}</span><a href={props.item.googleMapsUrl}><span className="mapsLoc"> View On Google Maps</span></a>
                <h2 className="title1">{props.item.title}</h2>
                <span className="date1">{props.item.startDate} - {props.item.endDate}</span>
                <p className="desc">{props.item.description}</p>
               
            </div>   
           <hr  className="line"/>
        </section>
     
    )

}