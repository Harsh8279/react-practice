import React, { Component } from 'react'

export class Welcome extends Component {
  
  render() {

    const {name,heroName} = this.props    // destructuring props in class component but in render method
    const {state1,state2} = this.state

    return (
      <div>
        <h1>Welcome {name} a.k.a {heroName}!!</h1>
        {/* {this.props.children} */}
      </div>
    )
  }
}

export default Welcome
