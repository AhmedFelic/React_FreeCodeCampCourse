import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {



  const[thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
  
  function addItem(){
    setThingsArray(prevThingsArray =>{
      return [...prevThingsArray,`Thing ${prevThingsArray.length + 1}`]})
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div className="App">
     <button onClick={addItem}>Add Item</button>
            {thingsElements}
    </div>
  )
}

export default App
