import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Boxes from './boxes'
import Box from './Box'

function App() {

  const [boxes, setBoxes] = useState(Boxes)


  const squareElements = boxes.map(square =>(
   <Box key={square.id} on = {square.on}/>
  ))

  return (
    <main>
      <div>
        {squareElements}
      </div>
    </main>
  )
}

export default App
