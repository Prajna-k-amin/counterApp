import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(0)
// let counter = 15
const addValue=() => {
setCounter (counter + 1)
console.log(counter)
}
const removeValue=() => {
  setCounter (counter - 1)
  console.log(counter)
  }
  return (
    <>
     <h1>React with programmer {counter}</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={removeValue}>Remove value</button>
     <p>footer: {counter}</p>
    
    </>
  )
}

export default App
