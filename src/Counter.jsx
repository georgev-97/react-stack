// import React from "react";

import { useEffect, useState } from "react";

// export class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this._interval = setInterval(() => {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//       }));
//     },1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }

//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }

export function Counter(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const k = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => {
      clearInterval(k);
    };
  }, []);

  return (
    <div>
      {counter}
    </div>
  )
}
