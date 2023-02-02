import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Button Clicked")
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button> 
      {/* not with parenthesis means EventHandler and if we use clickHandler() the it becomes function call 
        Event Handler is a function not a function call
      */}
    </div>
  )
}

export default FunctionClick
