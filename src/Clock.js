import React from "react";
import './Clock.css'

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
            <h1>Digital Clock</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
} 

export default Clock;