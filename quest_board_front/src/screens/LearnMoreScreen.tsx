import { JobDetails } from "../layout/JobDetails"
import { ApplyRegisteredForm } from "../layout/ApplyRegisteredForm"
import { ApplyUnregisteredForm } from "../layout/ApplyUnregisteredForm"
import {screenSize, background7, background71} from "../style/register/style"
import tokenAPI from "../api/token/tokenAPI"



const LearnMoreScreen = (props:any) => {
    

        return (
            <div>
                <div style={{...screenSize, ...background7}} className="row">
                    <JobDetails />
                </div>

                <div style={{...screenSize, ...background71}} id="apply" className="row">
                    {(tokenAPI.isConnected()) ? <ApplyRegisteredForm /> : <ApplyUnregisteredForm />}
                </div>

            </div>
        )

}

export default LearnMoreScreen