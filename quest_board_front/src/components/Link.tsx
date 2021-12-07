import React from 'react';
import LinkPropsInterface from '../types/components/link.interface';
import {active, disabled } from "../style/link/style";

export const Link = (props:LinkPropsInterface): JSX.Element => {

    const clickHandler = (event: React.MouseEvent<HTMLElement>) => {      
        console.log(event.target)
    }

    return(
        <a className="nav-link h6" href={props.href} onClick={clickHandler} id={props.id} style={(props.active ? active : disabled)} >{props.children}</a>
    )
}