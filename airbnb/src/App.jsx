import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import img2 from "../src/img/star.png"
import Data from "../data.js"
function App() {

  const data = Data.map(items =>{
    return<Card
    key = {items.id}
    image = {items.coverImg}
    starImg = {img2}
    rating={items.stats.rating}
    reviewCount={items.stats.reviewCount}
    country={items.location}
    title={items.title}
    price={items.price}
    />
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='cardList'>
      {data}
      </section>
    </div>
  )
}

export default App
