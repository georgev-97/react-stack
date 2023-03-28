const { useState, useCallback } = require("react");

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);
  const increment = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((counter) => counter - 1);
  }, []);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);
  return [counter, increment, decrement, reset];
}

export function Counter(props) {
  const [counter, increment, decrement, reset] = useCounter(42);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
