import React from "react";
import Counter  from "./Counter";

export class App extends React.Component{
    render(){
        return <div>
            <Counter interval={2000} amount = {10} />
        </div>
    }
}