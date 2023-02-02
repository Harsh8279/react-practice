import React, { Component } from 'react'

export class Subscribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome Bruh!!"
        }

        this.clickHandler = this.clickHandler.bind(this);   // 1st way
    }

    clickHandler(){
        console.log(this);      // now this has value because we bind this to method in the constructor
        // here this keyword has no value still clickHandler is class method
        // to solve this we have two ways 
        // 1. bind method 
        // 2. use arrowfunction
        this.setState(
        {message:"Thank you bruh!!"}
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Subscribe</button>
            </div>
        )
    }
}

export default Subscribe
