import React from "react"
import Online from "./Online.jsx"
import Offline from "./Offline.jsx"

function Status ({isOnline}){
    if(isOnline){
        return(<Online />)
    }
    return(<Offline />)
    }
export default Status
