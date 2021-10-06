import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '0',
            scale: 'c'
        }
    }

    // toCelsius = (fahrenheit) => {
    //    return (fahrenheit - 32) * 5 / 9;
    // }
      
    // toFahrenheit = (celsius) => {
    //     return (celsius * 9 / 5) + 32;
    // }

    // tryConvert = (temperature, convert) => {
    //     const input = parseFloat(temperature);
    //     if (Number.isNaN(input)) {
    //       return '';
    //     }
    //     const output = convert(input);
    //     const rounded = Math.round(output * 1000) / 1000;
    //     return rounded;
    // }

    handleCelciusChange = (e)=> {
        this.setState({
            temperature: e.target.value,
            scale: 'c'
        });
    }

    handleFerhaniteChange = (e) => {
        this.setState({
            temperature: e.target.value,
            scale: 'f'
        })
    }
    
    render() {
        
        const celcius = this.state.scale == 'c' ? this.state.temperature : (Math.round(((this.state.temperature - 32) * 5 / 9) * 1000) / 1000).toString(); 
        const ferhanite = this.state.scale == 'f' ? this.state.temperature : (Math.round(((this.state.temperature * 9 / 5) + 32) * 1000) / 1000 ).toString();

        return(
            <fieldset>
                <legend>Enter the temperture</legend>
                <TemperatureInput scale="c" onTemperatureChange={this.handleCelciusChange} temperature={celcius}/>
                <TemperatureInput scale="f" onTemperatureChange={this.handleFerhaniteChange} temperature={ferhanite}/>
                <BoilingVerdict
                    celcius={parseFloat(celcius)}/>
            </fieldset>
        )
    }
}

export default Calculator;