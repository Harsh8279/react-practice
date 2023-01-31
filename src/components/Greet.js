import React from 'react'

// function Greet() {
//   return (
//     <div>
//         <h1>Hello Harsh</h1>
//     </div>
//   )
// }

const Greet = (props) => {

    console.log(props);

    return (
        <div>
            <h1>Hello {props.name}!! a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )

}

export default Greet
