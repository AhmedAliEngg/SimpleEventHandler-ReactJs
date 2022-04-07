import React from "react";
//Arrow function with passing two props message and children
const AlertButton = ({ message, children })=>{
    return(
        <button onClick={() => alert(message)}>
        {children}
      </button>
    )
}
export default AlertButton;