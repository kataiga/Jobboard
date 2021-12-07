import React from 'react'
import RegistrerPayload from '../api/auth/registerPayload.interface';
import LoginPayload from '../api/auth/loginPayloadInterface';
export default interface AuthContextInterface {
    email:string,
    setEmail:React.Dispatch<React.SetStateAction<string>>,
    password:string,
    setPassword:React.Dispatch<React.SetStateAction<string>>,
    passwordCheck:string,
    setPasswordCheck:React.Dispatch<React.SetStateAction<string>>,
    lastname:string,
    setLastname:React.Dispatch<React.SetStateAction<string>>,
    firstname:string,
    setFirstname:React.Dispatch<React.SetStateAction<string>>,
    date:string,
    setDate:React.Dispatch<React.SetStateAction<string>>,
    avatar:string, 
    setAvatar:React.Dispatch<React.SetStateAction<string>>,
    nextClick: (index: number, toValidate : Array<{data: string, setter: React.Dispatch<React.SetStateAction<boolean>>}>) => void,
    sendRegister: (registrerPayload: RegistrerPayload) => void,
    sendLogin:(email:string, password:"string") => void,
    loginClick:(LoginPayload: LoginPayload, toValidate : Array<{data: string, setter: React.Dispatch<React.SetStateAction<boolean>>}>) => void
}