import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {

        // ternary operators we can use inside the JSX

        return(
            this.state.isLoggedIn ? 
            <div>Hello Harsh</div>:
            <div>Hello Guest</div>
        )

        
    }
}

export default UserGreeting
