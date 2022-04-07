import React from "react";
import Button from "../Button/Button";
const ToolBar = () => {
    return (
        <div onClick={()=>{
            alert("You Clicked on ToolBar")
        }}>
            <Button  onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>

    )
}
export default ToolBar;