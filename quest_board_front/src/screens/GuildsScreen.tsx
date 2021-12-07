import React from "react"
import { Navbar } from "../layout/Navbar"
import {background5, screenSize} from "../style/register/style"
import {hidenText} from "../style/colors/style"

const GuildsScreen = () => {
    return (
        <>
        <div style={{...background5, ...screenSize}}>
            <div className="container">
                <div className="row">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                
                <div className="col-lg-12 m-1">
                    <h2 style={hidenText} >Margin-left: -9999</h2>
                </div>

                <div className="col-lg-12 m-1">
                    <img className="img-fluid w-50" src={"/images/comingSoon.png"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default GuildsScreen