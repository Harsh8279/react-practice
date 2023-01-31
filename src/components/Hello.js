import React from "react"

const Hello = () => {
    // return(
    //     <div>
    //         Hello Harsh !!!
    //     </div>
    // )

    return React.createElement('div',null,React.createElement("h1",null,"Hello Harsh!!")); 

}

export default Hello;