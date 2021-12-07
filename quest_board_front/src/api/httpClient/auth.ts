import axios from 'axios'
import RegistrerPayload from '../../types/api/auth/registerPayload.interface'
import LoginPayload from '../../types/api/auth/loginPayloadInterface'
import ROUTES from './endpoints'

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = "*/*";

export default {
    register : (registerPayload : RegistrerPayload) => {
        return axios.post(`${ROUTES.BASE_URL}${ROUTES.REGISTER}`, registerPayload)
    },

    login : (loginPayload: LoginPayload) => {
        return axios.post(`${ROUTES.BASE_URL}${ROUTES.LOGIN}`, loginPayload)
    }
}