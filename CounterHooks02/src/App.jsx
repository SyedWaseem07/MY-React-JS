import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter === 20) {
      alert('Max value reached')
      return;
    }
    setCounter(counter + 1);
  }

  const reduceValue = () => {
    if(counter === 0) {
      alert('value cannot be reduced below to zero')
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter Project Using useState Hook</h1>
      <h2>Counter Value :- {counter}</h2>
      <button
      onClick={addValue}>Increase Value {counter}</button>
      <br />
      <button
      onClick={reduceValue}>Decrease Value {counter}</button>
    </>
  )
  
}

export default App
