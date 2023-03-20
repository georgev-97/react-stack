import { useEffect, useState } from "react";

export function Counter({ initialValue = 0, onCountChange }) {
  let [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    onCountChange(counter);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
    </div>
  );
}
