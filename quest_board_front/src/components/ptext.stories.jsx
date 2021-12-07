import "../style/bootstrap/bootstrap.min.css";
import {Ptext} from "./Ptext";

export default {
    title: 'Basic components/Ptext',
    component: Ptext,
    argTypes: {
        children: {
            name: "children",
            type: {name: "string", required: true},
            defaultValue: "P text",
        }
    }
}


export const Default = (props) => {

    return <p>{props.children}</p>
}