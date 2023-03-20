import React from "react";
import {Pokemon}  from "./Pokemon";
//https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}

export class App extends React.Component{
    onCountChange = (counter) =>{
        console.log(`The value of the counter is ${counter}`);
    }
    render(){
        return <div>
            <Pokemon/>
        </div>
    }
}