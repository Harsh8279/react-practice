import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countHandler(){
        this.setState({
            count:this.state.count+1
        },()=>{console.log(this.state.count)})   // added  here for getting incremental count appropriately
        
    }

    render() {
        return (
            <div>
                count : {this.state.count}
                <br></br>
                <br></br>
                <button onClick={() => this.countHandler()}>Increment</button>
            </div>
        )
    }
}

export default Counter
