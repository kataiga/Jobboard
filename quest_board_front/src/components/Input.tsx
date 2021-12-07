import React, { ChangeEvent } from "react";
import InputPropsInterface from '../types/components/input.interface';


export const Input = (props:InputPropsInterface): JSX.Element => {

    const handleInputValue = (event : ChangeEvent<HTMLInputElement>) : void => {
        props.setValue(event.target.value)
    }

    return(
        <div>
            <input 
                onChange={handleInputValue} 
                value={props.value} 
                type={props.type} 
                id={props.id} 
                name={props.name} 
                placeholder={props.placeholder}
                className={`form-control ${props.error ? "is-invalid" : ""} m-2`}
            />
            <div className="m-2" >
                {props.errorMessage}
            </div>
        </div>
    )
}