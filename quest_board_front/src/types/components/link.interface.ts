export default interface LinkPropsInterface{
    id:string,
    children:string,
    active?:boolean,
    onClick?:()=> void,
    href?:string
}