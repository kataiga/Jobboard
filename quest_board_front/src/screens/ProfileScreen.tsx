import { DetailsProfile } from "../layout/DetailsProfile"
import { ProfileUser } from "../layout/ProfileUser"
import { Navbar } from "../layout/Navbar"
import {screenSize, background7, background71} from "../style/register/style"


const LoginScreen = () => {

    return (
        <div>
            <div style={{...screenSize, ...background7}}>
                <div className="container">
                    <Navbar />
                </div>
                <div>
                    <ProfileUser />
                </div>
            </div>
            <div style={{...screenSize, ...background71}}>
                <div id="more" className="container align-self-center">
                    <DetailsProfile />
                </div>
            </div>
        </div>
    )
}

export default LoginScreen