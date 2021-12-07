import "../style/bootstrap/bootstrap.min.css";
import {H1text} from "./H1text"

export default {
    title: 'Basic components/H1text',
    component: H1text,
    argTypes: {
        children: {
            name: "children",
            type: {name: "string", required: true},
            defaultValue: "H1 text",
        }
    }
}


export const Default = (props) => {

    return <h1>{props.children}</h1>
}