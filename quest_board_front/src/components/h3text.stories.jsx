import "../style/bootstrap/bootstrap.min.css";
import {H3text} from "./H3text";

export default {
    title: 'Basic components/H3text',
    component: H3text,
    argTypes: {
        children: {
            name: "children",
            type: {name: "string", required: true},
            defaultValue: "H3 text",
        }
    }
}


export const Default = (props) => {

    return <h3>{props.children}</h3>
}