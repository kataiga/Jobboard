import "../style/bootstrap/bootstrap.min.css";
import "../style/bootstrap-icons/bootstrap-icons.css";
import {Rank} from "./Rank";

export default {
    title: 'Basic components/Rank',
    component: Rank,
    argTypes: {
        level: {
            name: "level",
            type: {name: "number", required: true},
            defaultValue: 2,
        }
    }
}

export const Default = (props) => {

    return <div>{Array.from({length:props.level}, () => <i className="bi bi-star-fill"></i>)}</div>
}