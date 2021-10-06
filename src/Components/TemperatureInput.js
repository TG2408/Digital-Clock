import React from "react";

class temperatureInput extends React.Component {
    
    constructor(props){
        super(props);
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
    //     return rounded.toString();
    // }

    render() {
        return (
            <>
                <fieldset>
                    <legend>Enter temperature in {this.props.scale}:</legend>
                    <input value={this.props.temperature}
                        onChange={this.props.onTemperatureChange} />
                </fieldset>
            </>
        )
    }
}

export default temperatureInput;