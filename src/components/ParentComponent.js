import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parnetName : "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parnetName} your child name is ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />                      {/* Parent to child */}
      </div>
    )
  }
}

export default ParentComponent
