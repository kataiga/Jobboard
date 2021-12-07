import React, { useState } from 'react';
import { searchbarJob, sendData } from '../services/job.service'
import JobContextInterface from '../types/context/jobContext.interface'
const JobContext = React.createContext<JobContextInterface>({} as JobContextInterface);

const JobProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
   const [ searchJob, setSearchJob ] = useState("")
   const [ message, setMessage ] = useState("")
   const [ firstname, setFirstname ] = useState("")
   const [ lastname, setLastname ] = useState("")
   const [ email, setEmail ] = useState("")
   const [companyData, setCompanyData] = React.useState({} as any)
    const [offerData, setOfferData] = React.useState({} as any)

  return <JobContext.Provider value={{
    searchJob,
    setSearchJob,
    message,
    setMessage,
    searchbarJob,
    sendData, 
    firstname, 
    lastname,
    email,
    setFirstname,
    setLastname,
    setEmail,
    companyData,
    offerData, 
    setCompanyData, 
    setOfferData

  }}>{children}</JobContext.Provider>;
};

const useJobContext = (): JobContextInterface => {
  return React.useContext(JobContext);
};

export { JobProvider, useJobContext };