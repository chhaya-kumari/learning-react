import { useState } from 'react'
import './App.css'



function App() {
  let [counter, setCounter] = useState(0);
 // let counter=10;

  let increment = () => {
   if(counter<20) {
    setCounter(counter + 1);
    console.log(counter);
   }
  };
  let decrement=() => {
    if(counter>0){
    setCounter(counter-1);
    console.log(counter);
    }
  }

  return (
    <>
    <h1>Button Counter</h1>
    <p>Counter Value : {counter}</p>
    <button onClick={increment}>Add Value : {counter}</button>
    <button onClick={decrement}>Subtract Value: {counter} </button>
    </>
  )
}

export default App
