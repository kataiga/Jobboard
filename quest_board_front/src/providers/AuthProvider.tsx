import React, { useState } from 'react';
import AuthContextInterface from '../types/context/authContext.interface'

import { sendLogin, nextClick, sendRegister, loginClick } from '../services/auth.service'

const AuthContext = React.createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [passwordCheck, setPasswordCheck] = useState("")
   const [firstname, setFirstname] = useState("")
   const [lastname, setLastname] = useState("")
   const [avatar, setAvatar] = useState("https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light")
   const [date, setDate] = useState("")


  return <AuthContext.Provider value={{
    email,
    setEmail,
    password,
    setPassword,
    passwordCheck,
    setPasswordCheck,
    firstname,
    setFirstname,
    setLastname,
    avatar,
    setAvatar,
    lastname,
    date,
    setDate,
    nextClick,
    sendLogin,
    loginClick,
    sendRegister
  }}>{children}</AuthContext.Provider>;
};

const useAuthContext = (): AuthContextInterface => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuthContext };