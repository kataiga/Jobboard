import React, { ChangeEvent } from "react";
import {Button} from "../components/Button";
import {H3text} from "../components/H3text";
import wording from "../wording";
import {marginTextarea} from "../style/learnmore/style"
import { useJobContext } from "../providers/JobProvider";
import qs from "qs";
import crud from "../api/httpClient/crud";
import ROUTES from "../router/ROUTES";

export const ApplyRegisteredForm = (): JSX.Element => {
    
    const jobContext = useJobContext()
    
    const valuehandler = (event : ChangeEvent<HTMLTextAreaElement>) : void => {
        jobContext.setMessage(event.target.value)
    }

    const sendData = () => {
        crud.user.get().then(data => {crud.applyUtils.get({id: data.data.user.id.toString()}).then(dataApplyUtils => {
            const applyUtils = (dataApplyUtils.data as any).applyUtils
            crud.apply.create({
                message: jobContext.message, 
                userMail: JSON.parse(localStorage.getItem('connectionPayload') as string).email, 
                skills: applyUtils.skills, 
                graduate: applyUtils.graduate, 
                companyId: jobContext.companyData.id.toString()
            }).then(()=> document.location.href = ROUTES.DASHBOARD)
        })})
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
                <textarea style={marginTextarea} className="form-control" placeholder={wording.apply.placeholder.message} id="message" name="message" onChange={valuehandler} ></textarea>
                </div>
            </div>
            
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Button danger onClick={() => sendData()}>
                            {wording.apply.button}
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}