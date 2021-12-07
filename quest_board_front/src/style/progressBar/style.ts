import React from "react";
import COLORS from "../colors";

export const progressVal = (val:string) :React.CSSProperties =>{
    
    return { width:`${val}%`}
}

export const bgProgressBar = {
    backgroundColor:COLORS.DANGER
}
