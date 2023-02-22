import React from "react";

const sumH2 = (a, b) =><h2>{a+b}</h2>

export class App extends React.Component{
    render(){
        return sumH2(199,1);
    }
}