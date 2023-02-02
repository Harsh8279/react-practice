import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>this.props.greetHandler("Guddu")}>Greet Parent</button>
        {/* Child to Parent */}
      </div>
    )
  }
}

export default ChildComponent
