import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imgF from "./img/felix.png"
import imgP from "./img/phone-icon.png"
import imgM from "./img/mail-icon.png"
import imgPu from "./img/pumpkin.png"
import imgMr from "./img/mr-whiskerson.png"
import imgFl from "./img/fluffykins.png"
import Contact from './components/contact'

function App() {
 

  return (
  
        <div className="contacts">
          <Contact
            img={imgMr}
            name ="Mr. Whiskerson"
            phone = "(212) 555-1234"
            mail ="mr.whiskaz@catnap.meow"
          />
          <Contact
              img={imgFl}
              name ="Fluffykins"
              phone = "(212) 555-2345"
              mail ="fluff@me.com"
          />
          <Contact
              img={imgF}
              name ="Felix"
              phone = "(212) 555-4568"
              mail ="thecat@hotmail.com"
          />
          <Contact
              img={imgPu}
              name ="Pumpking"
              phone = "(0800) CAT-KING"
              mail ="pumpkin@scrimba.com"
          />
        </div>
 
  )
}

       
export default App
