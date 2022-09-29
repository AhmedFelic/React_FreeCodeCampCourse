import React from "react";
import memeData from "../memeData";
import { useState } from "react";

export default function Input(){


    const [memeImage, setMemeImage] = useState("")

    

    let url;

    function Clicked(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
        setMemeImage(url)
    }


    return(
        <main>
            
            <div className="form">
                <input type="text" placeholder="Top Text" className="formInput" />
                <input type="text" placeholder="Bottom Text" className="formInput" />
                <button onClick={Clicked} className="formButton">Get a new image</button>
               
            </div>
            <img src={memeImage} className="memeImage"/>
        </main>
    )
}