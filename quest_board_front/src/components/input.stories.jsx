import React from "react";
import "../style/bootstrap/bootstrap.min.css";
import {Input} from "./Input";

export default {
    title: 'Basic components/Input',
    component: Input,
    argTypes: {
        type: {
          options: ['text', 'email', 'password'],
          control: { type: 'select' }
        }
    }
}

export const Default = (props) => {

    const [value, setValue] = React.useState("");

    const valueHandler = (elem) => {
        setValue(elem.target.value)
    }

    return(
        <input 
            onChange={valueHandler} 
            value={value} 
            type={props.type} 
            id={props.id} 
            name={props.name} 
            placeholder={props.placeholder}
            className="form-control"
        />
    )
}
