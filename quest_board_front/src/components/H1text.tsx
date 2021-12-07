import H1textPropsInterface from '../types/components/h1text.interface';

export const H1text = (props: H1textPropsInterface): JSX.Element => {

    return(
        <h1 style={props?.style ? props.style : {}}>{props.children}</h1>
    )
}