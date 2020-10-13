import React from "react"
import "./PersonSlot.css"

function PersonSlot(props){
    let special = ""

    if(!props.special){special= "none"}
    else if(props.special === "rainbow"){special = "rainbow rainbow_text_animated"}
    else if(props.special === "dalux"){special = "dalux"}
    else if(props.special === "mod"){special= "mod"}
    else if(props.special === "blackout"){special = "blackout"}
    
    return(
    <div>
        <p className="MainText">
        <span 
        style={{color: props.color, fontFamily: "monospace", fontSize: "15px"}} 
        className={special}>{props.person}</span>

        <span 
        style={{display: !props.desc && "none"}}> - </span>

        <span>{props.desc}</span></p>
        {console.log(special)}
    </div>
    )
}


export default PersonSlot