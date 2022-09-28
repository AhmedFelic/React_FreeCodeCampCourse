import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  
  const [newValue, setNewValue] = useState("Yes")
  
  function change(){
    setNewValue("No")
  }

  const [newValue1, setNewValue1] = useState(0)

  function change2(){
    setNewValue1(newValue1 + 1)
  }
  function change3(){
    setNewValue1(newValue1 - 1)
  }
  

  return (
    <main>
    <div className="App">
      <h1>Is state important to know?</h1>
      <div className='round' onClick={change}>

      <h2 className='naslov'>{newValue}</h2>
      </div>
      
    

    </div>

<div className='drugiDio'>
      <h2>+ for up, - for down</h2>
     
        <div className='round'>
        <h2 className='naslov1'>{newValue1}</h2>
    
         </div>
         <div className='round2' onClick={change3}>
         <span>-</span>
         </div>

         <div className='round1' onClick={change2}>
        <span>+</span>
      
      </div>
    
       
   </div>
   </main>
  )
  }


export default App
