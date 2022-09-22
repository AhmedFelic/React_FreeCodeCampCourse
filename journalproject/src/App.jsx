import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/navbar'
import './index.css'
import data from '../data'
import Card from './components/card'
function App() {
 
  const Data = data.map(items=>{
    return(<Card
    key={items.id}
    item = {items}
    />)
  })



  return (
   <div>
   <Navbar/>
    <section className='sekcija1'>
      {Data}
    </section>
    </div>
   )
}

export default App
