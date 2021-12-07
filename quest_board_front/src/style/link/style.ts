import React from "react";
import COLORS from "../colors";

export const active:React.CSSProperties = {
    textDecoration: "underline",
    cursor: "pointer",
    color:COLORS.PURPLE
}

export const disabled:React.CSSProperties = {
    textDecoration: "none",
    cursor: "pointer",
    color:COLORS.PURPLE
}
