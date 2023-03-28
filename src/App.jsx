import React from "react";
import { CarDetails } from "./CarDetails";

export class App extends React.Component{
    render(){
        return <div>
            <CarDetails initialData={{model:"Mercedes",year:"2017",color:"white"}}/>
        </div>
    }
}