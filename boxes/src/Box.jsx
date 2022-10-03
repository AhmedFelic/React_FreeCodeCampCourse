import React from "react";
import { useState } from "react";

export default function(props){
    
    const [control, setControl] = useState(props.control)


    const styles = {
        backgroundColor: control ? "#222222" : "transparent"
    }


    function clicked(){

        setControl(prevControl => !prevControl)
      
    }

   


    return(
        <div className="box" style={styles} onClick={clicked}></div>
    )
}