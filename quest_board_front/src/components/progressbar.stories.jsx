import "../style/bootstrap/bootstrap.min.css";
import {ProgressBar} from "./ProgressBar";
import {progressVal, bgProgressBar} from '../style/progressBar/style';

export default {
    title: 'Basic components/Progress bar',
    component: ProgressBar,
    argTypes: {
        currentValue: {
            name: "currentVal",
            type: {name: "number", required: true},
            defaultValue: "25",
            
        }
    }
}


export const Default = (props) => {

    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{...progressVal(props.currentValue),...bgProgressBar}}></div>
        </div>
    )
    
}