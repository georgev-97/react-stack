import React from "react";
import {Counter}  from "./Counter";

export class App extends React.Component{
    onCountChange = (counter) =>{
        console.log(`The value of the counter is ${counter}`);
    }
    render(){
        return <div>
            <Counter initialValue={0} onCountChange={this.onCountChange} />
        </div>
    }
}