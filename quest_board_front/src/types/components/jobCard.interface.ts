export default interface JobCardPropsInterface{
    title:string,
    description:string,
    level:number, 
    redirect:() => void
}