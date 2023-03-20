import React from "react";
import Container from "./Container";

export class App extends React.Component{
    render(){
        return (
            <Container className="container">
                <h1>Children component</h1>
            </Container>
        )
    }
}