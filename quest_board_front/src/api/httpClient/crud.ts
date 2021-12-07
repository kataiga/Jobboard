import axios from 'axios'
import ROUTES from './endpoints'

export default {
    applyUtils : {
        create : (createPayload : any) => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.APPLY_UTILS.CREATE}`, createPayload)
        },
        get : (id: {id: number}) => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.APPLY_UTILS.GET}`, id)
        }, 
        update : (updatePayload : any) => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.APPLY_UTILS.UPDATE}`, updatePayload)
        }
    },
    jobOffer : {
        read : () : Promise<any> => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.JOB_OFFER.READ}`)
        }
    }, 
    company : {
        read : () : Promise<any> => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.COMPANY.READ}`)
        }
    }, 
    apply : {
        create : (createPayload : any) :  Promise<any> => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.APPLY.CREATE}`, createPayload)
        }
    }, 
    user : {
        get : () : Promise<any> => {
            return axios.post(`${ROUTES.BASE_URL}${ROUTES.USER.GET}`, {email: JSON.parse(localStorage.getItem("connectionPayload") as string).email})
        } 
    }
}