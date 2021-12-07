export default interface ButtonPropsInterface{
    danger?:boolean,
    primary?:boolean,
    secondary?:boolean,
    basic?:boolean,
    success?:boolean,
    rounded?:boolean,
    children:JSX.Element | string,
    onClick?:()=> void,
}