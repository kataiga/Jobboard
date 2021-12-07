import wording from "../wording";
import { Ptext } from "../components/Ptext"
import { H1text } from "../components/H1text"
import { Button } from "../components/Button"
import ROUTES from "../router/ROUTES"
import {screenSize} from "../style/register/style"
import { marginTop, landingText, marginBottom, background , linkColor, fontSize} from "../style/landing/style"

const LandingScreen = () => {
    return (
        <div style={{...background, ...screenSize}} className="container-fluid text-center">

                <div className="row">
                    <div style={{...marginTop, ...fontSize}} className="col-lg-12">
                        <Ptext>{wording.landingPage.title}</Ptext>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-12">
                        <H1text style={landingText}>{wording.landingPage.catchText}</H1text>
                    </div>
                </div>

            <div className="row">
                <div style={marginBottom} className="col-lg-12">
                    <a href={ROUTES.REGISTER}>
                        <Button primary>
                            {wording.landingPage.button}
                        </Button>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 mt-2">
                    <a style={linkColor} href={ROUTES.DASHBOARD}>{wording.landingPage.link}</a>
                </div>
            </div>

        </div>
    )
}

export default LandingScreen