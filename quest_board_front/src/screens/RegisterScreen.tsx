import { RegisterFormFirst } from "../layout/RegisterFormFirst"
import { RegisterFormSecond } from "../layout/RegisterFormSecond"
import { RegisterFormThird } from "../layout/RegisterFormThird"
import {screenSize, background1, background2, background3} from "../style/register/style"

const RegisterScreen = () => {
    return (
        <div>
            <div style={{...screenSize, ...background1}} className="row">
                <RegisterFormFirst />
            </div>
            <div id="second" style={{...screenSize, ...background2}} className="row">
                <RegisterFormSecond />
            </div>
            <div id="third" style={{...screenSize, ...background3}} className="row">
                <RegisterFormThird />
            </div>
        </div>
    )
}

export default RegisterScreen