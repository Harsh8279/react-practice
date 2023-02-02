import React, { Component } from 'react'

export class Subscribe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome Bruh!!"
        }
    }

    clickHandler(){
        console.log(this);      
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
