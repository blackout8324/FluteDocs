import React from "react"
import personData from "./personData"
import PersonSlot from "./PersonSlot"

function PersonList(){
    return(
        personData.map(data => <PersonSlot key={data.id} color={data.color} person={data.person} desc={data.desc} special={data.special} Id={data.id}/>)
    )
}

export default PersonList