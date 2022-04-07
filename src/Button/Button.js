import React from "react";
const Button = ({onSmash,children})=>{
    return(
        <button onClick={onSmash}>
            {children}
        </button>
    )
}
export default Button;