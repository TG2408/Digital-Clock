function BoilingVerdict (props) {
    if(props.celcius >= 100)  return <p>the Water would boil</p>;
    else return <p>{100-props.celcius} deg more temperature needed</p>;
}

export default BoilingVerdict;