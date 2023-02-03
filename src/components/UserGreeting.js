import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

       // whenever you want to return something or nothing 
       // then you can use short-circuit method

       return this.state.isLoggedIn && <div>Hello Harsh</div>
        
    }
}

export default UserGreeting
