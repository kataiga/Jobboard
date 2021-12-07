import {Input} from "../components/Input";
import {Button} from "../components//Button";
import {H3text} from "../components//H3text";
import wording from "../wording";
import { useAuthContext } from "../providers/AuthProvider";

import React from "react";


export const RegisterFormSecond = (): JSX.Element => {
    const authContext = useAuthContext()
    const [emailError, setEmailError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [passwordCheckError, setPasswordCheckError] = React.useState(false)

    return(
        <div className="col-lg-12 align-self-center">
            <div  className="row">
                <div className="col-lg-12 text-center">
                    <H3text>{wording.registerScreen.title.second}</H3text>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder={wording.registerScreen.placeholder.email}
                        value={authContext.email}
                        setValue={authContext.setEmail as React.Dispatch<React.SetStateAction<string>>}
                        error={emailError}
                    />
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder={wording.registerScreen.placeholder.password}
                        value={authContext.password}
                        setValue={authContext.setPassword as React.Dispatch<React.SetStateAction<string>>}
                        error = {passwordError}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="password"
                        id="passwordCheck"
                        name="passwordCheck"
                        placeholder={wording.registerScreen.placeholder.passwordConfirmation}
                        value={authContext.passwordCheck}
                        setValue={authContext.setPasswordCheck as React.Dispatch<React.SetStateAction<string>>}
                        error ={passwordCheckError}
                    />
                </div>
            </div>
            
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Button secondary rounded onClick={
                            () => authContext.nextClick(2, 
                                [
                                    {data: authContext.email, setter: setEmailError},
                                    {data: authContext.password, setter: setPasswordError}, 
                                    {data: authContext.passwordCheck, setter: setPasswordCheckError}
                                ]
                            )}
                        >
                            <i className="bi bi-caret-down-fill"></i>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}