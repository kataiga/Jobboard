import React from "react";
import { primary, secondary, danger, success } from "../style/colors/style"
import ButtonPropsInterface from '../types/components/button.interface';

/** 
* This button got 3 state depending of where he is.
*/

export const Button = (props:ButtonPropsInterface): JSX.Element => {

    let style = secondary;
    if(props.primary) style = primary;
    else if(props.secondary) style = secondary;
    else if(props.danger) style = danger;
    else if(props.success) style = success
    
    return(
        <button 
            style={style} 
            onClick={props.onClick} 
            className={`btn ${props.rounded ? 'rounded-circle' : ''}`}>
            {props.children}
        </button>
    );
};

