import React from "react";

export default interface InputPropsInterface{
    type:string,
    id:string,
    name:string,
    placeholder?:string,
    value:string,
    onChange?:React.Dispatch<React.SetStateAction<string>>,
    error?:boolean,
    errorMessage?:"string",
    setValue:React.Dispatch<React.SetStateAction<string>>,
    
}