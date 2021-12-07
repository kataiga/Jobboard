import {H3text} from "./H3text"
import {ProgressBar} from "./ProgressBar"
import "../style/bootstrap/bootstrap.min.css";
import { Skills } from "./Skills";

export default {
    title: 'multi components/Skills',
    component: Skills,
    argTypes: {
        expertise: {
            name: "expertise",
            type: {name: "string", required: true},
            defaultValue: "React DOM",
        },

        currentValue: {
            name: "currentValue",
            type: {name: "string", required: true},
            defaultValue: "25"
        }
    }
}

export const Default = (props) => {

    return(
        <div>
            <H3text>{props.expertise}</H3text>
            <ProgressBar currentValue={props.currentValue} />
        </div>
    )
}