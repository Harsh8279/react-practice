import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countHandler() {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count) })   // added  here for getting incremental count appropriately

    }

    incrementFive(){
        this.countHandler();
        this.countHandler();
        this.countHandler();
        this.countHandler();
        this.countHandler();
    }

    render() {
        return (
            <div>
                count : {this.state.count}
                <br></br>
                <br></br>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
