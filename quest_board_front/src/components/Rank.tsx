import RankPropsInterface from '../types/components/rank.interface';

export const Rank = (props:RankPropsInterface): JSX.Element => {

    return <div>{Array.from({length:props.level}, () => <i className="bi bi-star-fill"></i>)}</div>
}