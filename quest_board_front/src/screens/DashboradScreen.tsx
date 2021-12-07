import React from "react"
import { Navbar } from "../layout/Navbar"
import { JobCards } from "../layout/JobCards"
import {background5, screenSize} from "../style/register/style"

const DashboardScreen = () => {
    return (
        <>
        <div style={{...background5, ...screenSize}}>
            <div className="container">
                <div className="row">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <JobCards/>
            </div>
        </div>
        </>
    )
}

export default DashboardScreen