import React from 'react'
import img from "../img/avatar2.png"

export default function Main(){

  return  <div className="mainDiv">
        <img src={img} alt="" />
        <h2 className='c t'>Ahmed Felić</h2>
        <h3 className='c t ss'>Frontend dev</h3>
        <div class="btn">
            <button class="btn1">Email</button>
            <button class="btn2">LinkedIn</button>
        </div>
        
        <h3 className='l'>About</h3>
        <p className='a'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <h3 className='l'>Interests</h3>
        <p className='a'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
    </div>
}