import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: ''
        }
    }

    handleChange = (e)=> {
        this.setState({temperature: e.target.value});
      }
    
    render() {
        return(
            <fieldset>
                <legend>Enter the temperture</legend>
                <TemperatureInput scale="c" onTemperatureChange={this.handleChange} temperature={this.state.temperature}/>
                <TemperatureInput scale="f" onTemperatureChange={this.handleChange} temperature={this.state.temperature}/>
                <BoilingVerdict
                    celcius={parseFloat(this.state.temperature)}/>
            </fieldset>
        )
    }
}

export default Calculator;