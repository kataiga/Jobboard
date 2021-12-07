import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {H3text} from "../components/H3text";
import wording from "../wording";
import { useAuthContext } from "../providers/AuthProvider";

import React from 'react'

export const RegisterFormFirst = (): JSX.Element => {
    const authContext = useAuthContext()
    const [firstnameError, setFirstnameError] = React.useState(false)
    const [lastnameError, setLastnameError] = React.useState(false)
    const [dateError, setDateError] = React.useState(false)

    return(
        <div className="col-lg-12 align-self-center animated fadeIn">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <H3text>{wording.registerScreen.title.first}</H3text>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder={wording.registerScreen.placeholder.firstname}
                        value={authContext.firstname}
                        setValue={authContext.setFirstname as React.Dispatch<React.SetStateAction<string>>}
                        error={firstnameError}
                    />
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder={wording.registerScreen.placeholder.lastname}
                        value={authContext.lastname}
                        setValue={authContext.setLastname as React.Dispatch<React.SetStateAction<string>>}
                        error={lastnameError}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="date"
                        id="date"
                        name="date"
                        placeholder=""
                        value={authContext.date}
                        setValue={authContext.setDate as React.Dispatch<React.SetStateAction<string>>}
                        error={dateError}
                    />
                </div>
            </div>
            
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Button secondary rounded onClick={() =>
                                authContext.nextClick(1, [
                                    {data: authContext.firstname, setter: setFirstnameError},
                                    {data: authContext.lastname, setter: setLastnameError}, 
                                    {data: authContext.date, setter: setDateError}
                                ])}
                        >
                            <i className="bi bi-caret-down-fill"></i>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}