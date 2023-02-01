import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countHandler() {
        // passing object as an argument for setstate
        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count) })   // added  here for getting incremental count appropriately

    }

    increment(){
        // passing function as an argument
        this.setState((prvState)=>({
            count:prvState.count + 1,
        }),console.log("Callback Count ",this.state.count))

        console.log("Count ",this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
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
