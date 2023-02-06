import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["Harsh","Swayam","Hetarth", "Harsh"]
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

    const nameList = names.map((name,index)=><h2 key={index}>{index}{name}</h2>)

    // const nameList = persons.map(person => 
    //     <Person key={person.id} person={person} />
    //     )
        // key props should be unique within the list
        // and must include while creating list of elements
        // key props are not accessible in child components
    return <div>{nameList}</div>
}

export default NameList
