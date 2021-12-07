import {H3text} from "./H3text"
import {Ptext} from "./Ptext"
import GraduationPropsInterface from "../types/components/graduation.interface"


export const Graduation = (props:GraduationPropsInterface): JSX.Element => {
    
    return(
        <div>
            <H3text>{props.diploma}</H3text>
            <Ptext>{props.date}</Ptext>
        </div>
    )
}