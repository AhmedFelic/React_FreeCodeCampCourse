import React from "react";
import memeData from "../memeData";
import { useState } from "react";

export default function Input(){


   // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memeData)

    let url;

    function Clicked(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
        setMeme(prevImage =>({
            ...prevImage,
            randomImage: url
        })
            
            )
    }


    return(
        <main>
            
            <div className="form">
                <input type="text" placeholder="Top Text" className="formInput" />
                <input type="text" placeholder="Bottom Text" className="formInput" />
                <button onClick={Clicked} className="formButton">Get a new image</button>
               
            </div>
            <img src={meme.randomImage} className="memeImage"/>
        </main>
    )
}