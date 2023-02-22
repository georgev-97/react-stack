import React from "react";

function createHelloTag(name){
    return <h1>Hello {name}</h1>
}

export class App extends React.Component{
    render(){
        return createHelloTag("Francesco");
    }
}