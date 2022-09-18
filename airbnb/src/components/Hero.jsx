import React from "react"
import img from "../img/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={img} className="heroPhoto" />
            <h1 className="heroHeader">Online Experiences</h1>
            <p className="heroText">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}