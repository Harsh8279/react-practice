import React from 'react'

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

    const nameList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I am skilled in {person.skill}</h2>)

    return <div>{nameList}</div>
}

export default NameList
