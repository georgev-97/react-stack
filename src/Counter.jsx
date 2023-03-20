import { useState } from "react";

export function Counter({initialValue=0}){
  let [counter, setCounter] = useState(initialValue);
  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter => counter + 1)}>+</button>
    </div>
  )
}