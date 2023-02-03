import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        let message;

        if(this.state.isLoggedIn){
            message = <div>Hello Harsh</div>
        }
        else{
            message=<div>Hello Guest</div>
        }

        return message;

        
    }
}

export default UserGreeting
