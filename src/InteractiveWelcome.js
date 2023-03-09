import React from "react";
import Welcome from './Welcome';

export class InteractiveWelcome extends React.Component{

    state={
        name: ""
    }

    handleInput = (event) => {
        let name = event.target.value;
        this.setState({name: name});
    }

    render(){
        return(
            <div>
                <input onChange = {this.handleInput} type="text" placeholder="Name"/>
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}


// Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
// Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.