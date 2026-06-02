import { useState } from 'react'


function App() {
  let [counter, setCount] = useState(0)
  
  const addValue = () => {
    if(counter<20){
      setCount(counter+1)
    }  
  }

  const removeValue = () => { 
   if(counter>0){
    setCount(counter-1)
   }  
  }

  return (
    <>
    <h1>Shopping Cart {counter}</h1>
    <button onClick={addValue}>Add product ({counter})</button>
    <br></br>
    <br></br>
    <button onClick={removeValue}>Remove product ({counter})</button>
    <h5>You can only upto 20 products at a time</h5>  
    </>
  )
}

export default App
