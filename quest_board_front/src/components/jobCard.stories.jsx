import "../style/bootstrap/bootstrap.min.css";
import {JobCard} from "./JobCard";
import {H3text} from "./H3text"
import {Ptext} from "./Ptext"
import {Rank} from "./Rank"
import {Button} from "./Button"
import { purple, whiteText, whiteBorder } from "../style/colors/style";

export default {
    title: 'Basic components/JobCard',
    component: JobCard,
}


export const Default = () => {

    return (
        <div  className="container">
            <div style={{...purple, ...whiteText}} className="col-lg-3 rounded pt-4">  
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <H3text>pipi</H3text>
                        <Ptext>caca</Ptext>
                        <hr style={ whiteBorder } className="border border-2"/>
                        <Ptext>gros cacaezaf qzfdsdqf sd fqds fdsq g gh jny dfhsqdgfdg </Ptext>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 text-end">
                        Rank : 
                    </div>
                    <div className="col-lg-6 pb-4">
                        <Rank level="3"></Rank>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center pb-5">
                        <Button primary onClick={() => console.log("prout")}>Learn more</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}