import React from "react";

class temperatureInput extends React.Component {
    
    constructor(props){
        super(props);
    }
 
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