import React from "react";
import reactDom from "react-dom";
import Calculator from './Components/Calculator'

const element = (
    <>
        <Calculator/>
    </>
);


reactDom.render(
    element, 
    document.getElementById("root")
);

