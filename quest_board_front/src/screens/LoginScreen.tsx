import { LoginForm } from "../layout/LoginForm"
import {screenSize, background4} from "../style/register/style"


const LoginScreen = () => {
    return (
        <div>
            <div style={{...screenSize, ...background4}} className="row">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginScreen