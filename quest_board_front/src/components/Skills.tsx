import {H3text} from "./H3text"
import {ProgressBar} from "./ProgressBar"
import SkillsPropsInterface from "../types/components/skills.interface"


export const Skills = (props:SkillsPropsInterface): JSX.Element => {
    
    return(
        <div>
            <H3text>{props.expertise}</H3text>
            <ProgressBar currentValue={props.currentValue} />
        </div>
    )
}