import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <p>Welcome, {this.props.name}!</p>
                <Age age={this.props.age}/>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "George"
}

export default Welcome;

// Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
// Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.