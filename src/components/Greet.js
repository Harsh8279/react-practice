import React from 'react'

// function Greet() {
//   return (
//     <div>
//         <h1>Hello Harsh</h1>
//     </div>
//   )
// }

const Greet = (props) => {

    // console.log(props);
    let {name,heroName} = props // destructure in the function body
    return (
        <div>
            <h1>Hello {name}!! a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )

}

export default Greet
