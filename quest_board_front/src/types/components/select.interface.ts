import { ChangeEvent } from 'react';

export default interface SelectPropsInterface{
    name:string,
    selectID:string,
    default?:string
    options:Array<string>
    handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void
}