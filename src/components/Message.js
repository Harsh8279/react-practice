import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super();

        this.state = {
            message: "Welcome Visitor!",
            button: "Subscribe"
        }
    }

    changeMessage() {

        if (this.state.button === "Subscribe") {
            this.setState({
                message: "Thank you for subscribing!!",
                button: "Unsubscribe"
            })
        }
        else if (this.state.button === "Unsubscribe") {
            this.setState({
                message: "Welcome Visitor!",
                button: "Subscribe"
            })
        }


    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.button}</button>

            </div>
        );
    }

}

export default Message;