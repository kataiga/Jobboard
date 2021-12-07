import {H3text} from "./H3text"
import {Ptext} from "./Ptext"
import {Graduation} from "./Graduation";
import "../style/bootstrap/bootstrap.min.css";


export default {
    title: 'multi components/Graduation',
    component: Graduation,
    argTypes: {
        diploma: {
            name: "diploma",
            type: {name: "string", required: true},
            defaultValue: "bac pro production graphique",
        },

        date: {
            name: "date",
            type: {name: "date", required: true},
            defaultValue: new Date(Date.now())
        }
    }
}


export const Default = (props) => {

    return(
        <div>
            <H3text>{props.diploma}</H3text>
            <Ptext>{props.date.toDateString()}</Ptext>
        </div>
    )
}