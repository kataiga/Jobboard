
import SelectPropsInterface from '../types/components/select.interface';

export const Select = (props:SelectPropsInterface): JSX.Element => {
    
    return(
        <div>
            <select className="form-select" name={props.name} id={props.selectID} onChange={props.handleSelectChange}>
                {props.options.map((option, index) => <option key={index} value={option.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))).replace(/ /g, "")}>{option}</option>)}
            </select>
        </div>
    )
}