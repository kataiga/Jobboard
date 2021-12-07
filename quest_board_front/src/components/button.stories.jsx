import { primary, secondary, danger, basic } from "../style/colors/style"
import "../style/bootstrap/bootstrap.min.css";
import {Button} from "./Button"

export default {
    title: 'Basic components/Button',
    component: Button,
    argTypes: {
        primary: {
            name: "primary",
            type: {name: "boolean", required: false},
            defaultValue: null,
            description: 'main button'
        },

        danger: {
            name: "danger",
            type: {name: "boolean", required: false},
            defaultValue: null,
            description: 'danger button'
        }, 

        secondary: {
            name: "secondary",
            type: {name: "boolean", required: false},
            defaultValue: null,
            description: 'backoffice button'
        },

        basic: {
            name: "basic",
            type: {name: "boolean", required: false},
            defaultValue: null,
            description: 'next button'
        },

        rounded: {
            name: "Rounded",
            type: {name: "boolean", required: false},
            defaultValue: null,
            description: "set the button to be a circle"
        },

        children: {
            name: "children",
            type: {name: "string", required: true},
            defaultValue: "click me",
            description: "text of the button"
        },

    }
}

export const Default = (props) => {

    let style = basic;
    if(props.primary) style = primary;
    else if(props.secondary) style = secondary;
    else if(props.danger) style = danger;
    else if(props.basic) style = basic
    
    const test = () => {
        alert("It even work on water !")
    }


    return  <button style={style} onClick={test} className={`btn ${props.rounded ? 'rounded-circle' : ''}`}>{props.children}</button>
}
