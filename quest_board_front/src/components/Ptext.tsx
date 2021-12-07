import PtextPropsInterface from '../types/components/ptext.interface';

export const Ptext = (props: PtextPropsInterface): JSX.Element => {

    return(
        <p className={props.className}>{props.children}</p>
    )
}