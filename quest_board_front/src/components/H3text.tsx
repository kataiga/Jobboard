import H3textPropsInterface from '../types/components/h3text.interface';

export const H3text = (props: H3textPropsInterface): JSX.Element => {

    return(
        <h3 className={props.className}>{props.children}</h3>
    )
}