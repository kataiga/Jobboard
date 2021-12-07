import {H3text} from "./H3text"
import {Ptext} from "./Ptext"
import {Rank} from "./Rank"
import {Button} from "./Button"
import {purple, whiteText, whiteBorder } from "../style/colors/style";
import JobCardInterface from "../types/components/jobCard.interface"; 



export const JobCard = (props:JobCardInterface): JSX.Element => {
    
    return(
        <div style={{...purple, ...whiteText, margin: 10}} className="col-lg-2 rounded">  
            <div className="row">
                <div className="col-lg-12 text-center">
                    <H3text>{props.title}</H3text>
                    <hr style={ whiteBorder } className="border border-2"/>
                    <Ptext>{props.description.substring(0, 10)+" ..."}</Ptext>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-end">
                    Rank : 
                </div>
                <div className="col-lg-6 pb-4">
                    <Rank level={props.level}></Rank>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center pb-5">
                    <Button primary onClick={props.redirect}>Learn more</Button>
                </div>
            </div>
        </div>

    )
}