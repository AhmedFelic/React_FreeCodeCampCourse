import react from "react"
import reactDOM from "react-dom"
import img from "../img/react-logo.png"

export default function Navbat() {
    return <nav className="text">

             <img className="img" src = {img}></img>
             <h2 className="s" >ReactFacts</h2>
             <h3 className="h">React Course - Solo Project 1</h3>
           
        </nav>
}