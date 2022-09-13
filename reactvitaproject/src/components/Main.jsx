import react from "react"
import reactDOM from "react-dom"
import img from "../img/react-icon-large.png"
export default function Main() {

  
    return  <div className="main">
    <h1 className="mainH1">Fun facts about React</h1>
    <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Walke</li>
        <li>Has well over 100k stars on github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <img className="bckImg" src={img} alt="" srcset="" />
   </div>
}