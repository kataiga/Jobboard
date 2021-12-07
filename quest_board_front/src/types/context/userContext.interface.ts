import React from "react"

export default interface UserContextInterface {
    skill:any,
    setSkill?:React.Dispatch<React.SetStateAction<any>>,
    diploma:any,
    setDiploma?:React.Dispatch<React.SetStateAction<any>>,
    sendData?:() => void
}