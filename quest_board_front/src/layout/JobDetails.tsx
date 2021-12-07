import {Button} from "../components/Button";
import {H3text} from "../components/H3text";
import {Ptext} from "../components/Ptext"
import wording from "../wording";
import { useJobContext } from "../providers/JobProvider";
import qs from "qs";
import React from "react";
import crud from "../api/httpClient/crud";
import ROUTES from "../router/ROUTES";


export const JobDetails = (props:any): JSX.Element => {
    const jobContext = useJobContext()

    React.useEffect(() => {
        let urlData: any = qs.parse(window.location.search.replace('?', ''))
        urlData.id = parseInt(urlData.id)
        urlData.companyId = parseInt(urlData.companyId)
        jobContext.setOfferData(urlData)

        crud.company.read().then(data => {
            for(let company of data.data){
                if (company.data.id === urlData.companyId) {
                    console.log(company.data)
                    jobContext.setCompanyData(company.data)
                    break
                }
            }
        })
    }, [])

    return(
        <div className="col-lg-12 align-self-center">


            <div className="row">

                <div className="col-lg-6 text-center align-self-center">

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <img className="img-fluid w-50" src={"/images/working.png"}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <H3text>{jobContext.companyData.name}</H3text>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <H3text>{jobContext.companyData.description}</H3text>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 text-center align-self-center">

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Ptext>{jobContext.companyData.address}</Ptext>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 m-1 text-end">
                            <Ptext>{`CDI ${jobContext.offerData.workingTime}H`}</Ptext>
                        </div>

                        <div className="col-lg-5 m-1">
                            <Ptext>{`${jobContext.offerData.wage}/years`}</Ptext>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Ptext>{`${jobContext.offerData.content}`}</Ptext>
                        </div>
                    </div>
                     
                </div>

            </div>
            

            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 text-end">
                            <a href="#apply" ><Button danger>{wording.apply.button}</Button></a>
                        </div>
                        <div className="col-lg-6 text-start">
                            <a href={ROUTES.DASHBOARD} ><Button danger>{wording.apply.back}</Button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}