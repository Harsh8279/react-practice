import React from "react"

const Hello = () => {
    // return(
    //     <div>
    //         Hello Harsh !!!
    //     </div>
    // )

    return React.createElement('div', {id:"hello", className:"helloclass"}, React.createElement("h1", null, "Hello Harsh!!"));

}

export default Hello;