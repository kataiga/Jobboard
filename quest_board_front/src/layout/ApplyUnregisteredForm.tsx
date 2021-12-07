import React, { ChangeEvent } from "react";
import {Button} from "../components/Button";
import {H3text} from "../components/H3text";
import {Input} from "../components/Input"
import wording from "../wording";
import {marginTextarea} from "../style/learnmore/style"
import { useJobContext } from "../providers/JobProvider";
import crud from "../api/httpClient/crud";
import ROUTES from "../router/ROUTES";

export const ApplyUnregisteredForm = (): JSX.Element => {
    
    const jobContext = useJobContext()

    const valuehandler = (event : ChangeEvent<HTMLTextAreaElement>) : void => {
        jobContext.setMessage(event.target.value)
    }

    const sendData = () => {
        crud.apply.create({
            message: jobContext.message, 
            userMail: jobContext.email, 
            skills: {}, 
            graduate: {}, 
            companyId: jobContext.companyData.id.toString()
        }).then(()=> document.location.href = ROUTES.DASHBOARD)
    }

    return(
        <div className="col-lg-12 align-self-center">
            
            <div className="row">
                <div className="col-lg-12 text-center">
                    <H3text>{wording.apply.message}</H3text>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder={wording.apply.placeholder.firstname}
                        value={jobContext.firstname}
                        setValue={jobContext.setFirstname}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder={wording.apply.placeholder.lastname}
                        value={jobContext.lastname}
                        setValue={jobContext.setLastname}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <Input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder={wording.apply.placeholder.email}
                        value={jobContext.email}
                        setValue={jobContext.setEmail}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <textarea style={marginTextarea} className="form-control" placeholder={wording.apply.placeholder.message} id="message" name="message" onChange={valuehandler} ></textarea>
                </div>
            </div>
            
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Button danger onClick={() => sendData()}>
                            {wording.apply.apply}
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}