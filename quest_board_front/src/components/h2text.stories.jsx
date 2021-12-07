import "../style/bootstrap/bootstrap.min.css";
import {H2text} from "./H2text";

export default {
    title: 'Basic components/H2text',
    component: H2text,
    argTypes: {
        children: {
            name: "children",
            type: {name: "string", required: true},
            defaultValue: "H2 text",
        }
    }
}


export const Default = (props) => {

    return <h2>{props.children}</h2>
}