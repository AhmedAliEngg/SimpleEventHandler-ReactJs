import React from "react";
import Button from "../Button/Button";
const PlayingButton = ({movieName}) =>{
        const handlerClick = () =>{
            alert(`Playing ${movieName}`)
        }
        return(
            <Button onClick={handlerClick}>
                Play "{movieName}"
            </Button>
        )
}
export default PlayingButton;