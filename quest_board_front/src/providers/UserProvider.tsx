import React, { useState } from 'react';
import { sendData } from '../services/job.service'
import UserContextInterface from '../types/context/userContext.interface'
const UserContext = React.createContext<UserContextInterface>({} as UserContextInterface);

const UserProvider = ({ children }: { children: JSX.Element }): JSX.Element => {

    const [ skill, setSkill ] = useState([] as Array<any>)
    const [ diploma, setDiploma ] = useState([] as Array<any>)

    return <UserContext.Provider value={{
        skill,
        setSkill,
        diploma,
        setDiploma,
        sendData

  }}>{children}</UserContext.Provider>;
};

const useUserContext = (): any => {
  return React.useContext(UserContext);
};

export { UserProvider, useUserContext };