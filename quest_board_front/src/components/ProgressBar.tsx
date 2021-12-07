import ProgressBarPropsInterface from '../types/components/progressBar.interface';
import {progressVal, bgProgressBar} from '../style/progressBar/style';

export const ProgressBar = (props:ProgressBarPropsInterface): JSX.Element => {

    return (
        <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" style={{...progressVal(props.currentValue),...bgProgressBar}}></div>
        </div>
    )
}