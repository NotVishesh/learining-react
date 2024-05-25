import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5;
  const addValue = ()=>{
    // counter ++;\
    setCounter(counter +1)
  }
  const removeValue = ()=>{
    // counter ++;\
    if(counter > 0){
      setCounter(counter -1)
    }
    
  }
  
   return (
    
    <>
      <h1>chai or react</h1>
    <h2>counter value :{counter} </h2>
    <button onClick={addValue}>Add Value to {counter}</button>
    <br />  
    <button onClick={removeValue}>remove value to {counter}</button>
    </>
  )
}

export default App
