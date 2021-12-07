import {registerFirstValidation, registerSecondValidation, loginValidation} from '../utils/helpers/validation'
import RegisterPayload from '../types/api/auth/registerPayload.interface'
import LoginPayload from '../types/api/auth/loginPayloadInterface'
import authAPI from '../api/httpClient/auth'
import ROUTES from '../router/ROUTES'
import tokenAPI from '../api/token/tokenAPI'
import crud from '../api/httpClient/crud'
import Swal from 'sweetalert2'
import wording from '../wording'

export const sendLogin = (email: string, password: string) => {
    authAPI.login({email, password}).then(data  =>{
        if((data.data as any).status){
            tokenAPI.clear()
            tokenAPI.store({email, token : (data.data as any)?.data?.access })
            crud.user.get().then(data => {
                if(data.data.user.isAdmin) document.location.href = `http://localhost:8888/index.html`
                else document.location.href = document.location.href = `${ROUTES.DASHBOARD}`
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: wording.error.wrongPassword.title,
                text: wording.error.wrongPassword.message
            })
        }
    })
}

export const loginClick = (loginPayload: LoginPayload, toValidate: Array<{data: string, setter: React.Dispatch<React.SetStateAction<boolean>>}>) => {
    if(loginValidation(toValidate)) sendLogin(loginPayload.email, loginPayload.password)
}

export const nextClick = (index: number, toValidate: Array<{data: string, setter: React.Dispatch<React.SetStateAction<boolean>>}>) => {
    switch(index){
        case 1:
            if(registerFirstValidation(toValidate)) document.location.href = `${ROUTES.REGISTER}#second`
            break
        case 2:
            if(registerSecondValidation(toValidate)) document.location.href = `${ROUTES.REGISTER}#third`
    }
}

export const sendRegister = (registerPayload: RegisterPayload) : void => {
    authAPI.register(registerPayload).then(reponse => {
        if((reponse.data as any)?.passed) {
            crud.applyUtils.create({userId: (reponse.data as any)?.data.id, graduate: {}, skills:{}})
            sendLogin(registerPayload.email, registerPayload.password)
        }
        else{
            // todo: deal with error
            console.log(reponse.data)
        }
    }).catch(e =>
        console.log(e)
    )
}