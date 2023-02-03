import React from 'react'

function Person(props) {
    const {person} = props
    // or
    // const person = props.person
    // const {person,key} = props;      // key is not accessible in childe component
  return (
    <div>
      <h2>I am {person.name}. I am {person.age} years old. I am skilled in {person.skill} </h2>
    </div>
  )
}

export default Person
