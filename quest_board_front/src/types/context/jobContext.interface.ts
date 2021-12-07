import React from "react"

export default interface JobContextInterface {
    searchJob:string,
    setSearchJob:React.Dispatch<React.SetStateAction<string>>,
    message:string,
    firstname:string,
    lastname:string,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>, 
    setFirstname: React.Dispatch<React.SetStateAction<string>>,
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setLastname:React.Dispatch<React.SetStateAction<string>>,
    searchbarJob:(value:string) => void,
    sendData:() => void,
    companyData: any,
    offerData: any, 
    setCompanyData: any, 
    setOfferData: any
}