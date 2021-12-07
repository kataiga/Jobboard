import {Button} from "../components/Button";
import {Ptext} from "../components/Ptext"
import {Input} from "../components/Input"
import wording from "../wording";
import { useAuthContext } from "../providers/AuthProvider";
import React, { useState } from "react";
import crud from "../api/httpClient/crud";
import {marginThree, marginTow} from "../style/profile/style"


export const ProfileUser = (): JSX.Element => {
    const authContext = useAuthContext()

    const [updateMode, setUpdateMode] = useState(false)
    const [user, setUser] = useState({} as any)

    React.useEffect(() => {
        crud.user.get().then(data => {
            console.log(data.data.user)
            setUser(data.data.user)
        })
    }, [])

    return(
        <div className="col-lg-12">


            <div className="row">

                <div style={marginThree} className="col-lg-6 text-center align-self-center">

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <img className="img-fluid" src={user.avatar}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Ptext>{`${user.first_name} ${user.last_name}`}</Ptext>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Ptext>{user.birth}</Ptext>
                        </div>
                    </div>

                </div>

                <div style={marginThree} className="col-lg-6 text-center align-self-center">

                    <div className="row">
                        <div  className="col-lg-12 m-1">

                            {updateMode? 
                                    <div className="col-lg-8 offset-lg-2">
                                        <Input 
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder={wording.loginScreen.placeholder.username}
                                            value={authContext.email}
                                            setValue={authContext.setEmail}
                                        /> 
                                        
                                    </div>
                                        : <Ptext>{user.email}</Ptext>}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            {updateMode? 
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-3">
                                                <Input 
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder={wording.registerScreen.placeholder.password}
                                                    value={authContext.password}
                                                    setValue={authContext.setPassword}
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
                                                    setValue={authContext.setPasswordCheck}
                                                />
                                            </div>
                                        </div>
                                    </div>
                            : ""}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            {updateMode? <Button success onClick={() => setUpdateMode(false)}>Save</Button> : <Button danger onClick={() => setUpdateMode(true)}>Update</Button>}
                        </div>
                    </div>
                     
                </div>

            </div>
            
            <div className="row">
                <div className="col-lg-12 text-center">
                    <a href="#more" ><Button danger rounded><i className="bi bi-caret-down-fill"></i></Button></a>
                </div>
            </div>
        </div>
    )
}