import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Harsh",
            age: 22,
            skill: "React"
        },
        {
            id: 2,
            name: "Swayam",
            age: 17,
            skill: "Gaming"
        },
        {
            id: 3,
            name: "Hetarth",
            age: 6,
            skill: "Commnuication"
        },
    ]

    const nameList = persons.map(person => 
        <Person person={person} />
        )

    return <div>{nameList}</div>
}

export default NameList
