import ROUTES from '../../router/ROUTES'

export default {
    store: (data: {email: string, token: string}) : void => {
        localStorage.setItem('connectionPayload', JSON.stringify(data))
    }, 
    get: () : {email: string, token: string} | null => {
        const data = localStorage.getItem('connectionPayload')
        return data === null ? data : JSON.parse(data)
    },
    verify: () : void => {
        if(localStorage.getItem('connectionPayload') === null)  window.location.href = `${ROUTES.LANDING}` 
    }, 
    clear:() : void => {
        localStorage.removeItem('connectionPayload')
    }, 
    isConnected : () => {
        return localStorage.getItem('connectionPayload') !== null
    }
}