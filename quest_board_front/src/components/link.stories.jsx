import "../style/bootstrap/bootstrap.min.css";
import {Link} from "./Link";
import {active, disabled } from "../style/link/style";

export default {
    title: 'Basic components/Link',
    component: Link,
    argTypes: {
        children: {
            name: "children",
            type: {name: "string", required: true},
            defaultValue: "navLink",
        },

        active: {
            name: "active",
            type: {name: "boolean", required: false}
        }

    }
}

export const Default = (props) => {


    const clickHandler = (event) => {
        
        alert("you got redirected")

    }

    return(
        <a onClick={clickHandler} id={props.id} style={(props.active ? active : disabled)} >{props.children}</a>
    )

}
