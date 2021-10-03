import React from "react";
import reactDom from "react-dom";
import Clock from "./Clock.js";

const element = (
    <Clock/>
);

reactDom.render(
    element, 
    document.getElementById("root")
);

