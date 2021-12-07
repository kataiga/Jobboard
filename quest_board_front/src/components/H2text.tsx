import H2textPropsInterface from '../types/components/h2text.interface';

export const H2text = (props: H2textPropsInterface): JSX.Element => {

    return(
        <h2>{props.children}</h2>
    )
}