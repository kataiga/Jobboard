import React from "react";
import {Button} from "../components/Button";
import {Ptext} from "../components/Ptext"
import {H2text} from "../components/H2text"
import {Input} from "../components/Input"
import {Graduation} from "../components/Graduation"
import {ProgressBar} from "../components/ProgressBar"
import { useUserContext } from "../providers/UserProvider";
import crud from "../api/httpClient/crud";
import {marginOne, marginTow} from "../style/profile/style"


export const DetailsProfile = (): JSX.Element => {
    const userContext = useUserContext()

    const [updateMode, setUpdateMode] = React.useState(false)
    const [skillsData, setSkillsData] = React.useState([{name: "", bar: 3},{name: "", bar: 3},{name: "", bar: 3}]  as any)
    const [diplomaData, setDiplomaData] = React.useState([{name: "", date:"12-12-12"},{name: "", date:"12-12-12"},{name: "", date:"12-12-12"} ] as any)
    const [detailsSkill1, setDetailsSkill1] = React.useState("" as any)
    const [detailsSkill2, setDetailsSkill2] = React.useState("" as any)
    const [detailsSkill3, setDetailsSkill3] = React.useState("" as any)
    const [detailsSkillBar1, setDetailsSkillBar1] = React.useState("" as any)
    const [detailsSkillBar2, setDetailsSkillBar2] = React.useState("" as any)
    const [detailsSkillBar3, setDetailsSkillBar3] = React.useState("" as any)

    const [detailsGraduate1, setDetailsGraduate1] = React.useState("" as any)
    const [detailsGraduate2, setDetailsGraduate2] = React.useState("" as any)
    const [detailsGraduate3, setDetailsGraduate3] = React.useState("" as any)
    const [detailsGraduatePeriod1, setDetailsGraduatePeriod1] = React.useState("" as any)
    const [detailsGraduatePeriod2, setDetailsGraduatePeriod2] = React.useState("" as any)
    const [detailsGraduatePeriod3, setDetailsGraduatePeriod3] = React.useState("" as any)

    const saveDetails = () => {
        crud.user.get().then(data => {
            crud.applyUtils.get({id: data.data.user.id.toString()}).then(data => {
                console.log((data.data as any).applyUtils)
                crud.applyUtils.update(
                    {
                        id : (data.data as any).applyUtils.id.toString(), 
                        userId : (data.data as any).applyUtils.userId.toString(), 
                        skills: JSON.stringify([
                            {name: detailsSkill1, bar: detailsSkillBar1},
                            {name: detailsSkill2, bar: detailsSkillBar2},
                            {name: detailsSkill3, bar: detailsSkillBar3}
                        ]), 
                        graduate: JSON.stringify([
                            {name: detailsGraduate1, bar: detailsGraduatePeriod1},
                            {name: detailsGraduate2, bar: detailsGraduatePeriod2},
                            {name: detailsGraduate3, bar: detailsGraduatePeriod3}
                        ])}
                ).then(() => {window.location.reload()})
            })
        })
    }

    React.useEffect(() => {
        crud.user.get().then(data => {
            crud.applyUtils.get({id: data.data.user.id.toString()}).then(data => {
                setSkillsData(JSON.parse((data.data as any).applyUtils.skills))
                setDiplomaData(JSON.parse((data.data as any).applyUtils.graduate))
            })})
    }, [])

    return(
        <div className="col-lg-12">

            <div className="row">

                <div style={marginOne} className="col-lg-6 text-center">

                    <div className="row">
                        <div className="col-lg-12">
                            <H2text>Skills</H2text>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 text-start">
                        {updateMode? <Input 
                                            type="text"
                                            id="skillName"
                                            name="skillName"
                                            placeholder="name of the skill"
                                            value={detailsSkill1}
                                            setValue={setDetailsSkill1}
                                        />: 
                                        <Ptext>{skillsData[0].name}</Ptext>}  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mb-5">
                            {updateMode? <Input 
                                            type="number"
                                            id="skillBar"
                                            name="skillBar"
                                            placeholder="enter your level"
                                            value={detailsSkillBar1}
                                            setValue={setDetailsSkillBar1}
                                        />: <ProgressBar currentValue={skillsData[0].bar} />}

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 text-start">
                        {updateMode? <Input 
                                            type="text"
                                            id="skillName"
                                            name="skillName"
                                            placeholder="name of the skill"
                                            value={detailsSkill2}
                                            setValue={setDetailsSkill2}
                                        />: 
                                        <Ptext>{skillsData[1].name}</Ptext>}  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mb-5">
                            {updateMode? <Input 
                                            type="number"
                                            id="skillBar"
                                            name="skillBar"
                                            placeholder="enter your level"
                                            value={detailsSkillBar2}
                                            setValue={setDetailsSkillBar2}
                                        />: <ProgressBar currentValue={skillsData[1].bar} />}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 text-start">
                        {updateMode? <Input 
                                            type="text"
                                            id="skillName"
                                            name="skillName"
                                            placeholder="name of the skill"
                                            value={detailsSkill3}
                                            setValue={setDetailsSkill3}
                                        />: 
                                        <Ptext>{skillsData[2].name}</Ptext>}  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mb-5">
                            {updateMode? <Input 
                                            type="number"
                                            id="skillBar"
                                            name="skillBar"
                                            placeholder="enter your level"
                                            value={detailsSkillBar3}
                                            setValue={setDetailsSkillBar3}
                                        />: <ProgressBar currentValue={skillsData[2].bar} />}

                        </div>
                    </div>

                </div>



                <div className="col-lg-6 text-center align-self-center">

                    <div style={marginTow} className="row">
                        <div className="col-lg-12">
                            <H2text>Graduate</H2text>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            {updateMode? 
                            <div>
                                <div className="row">
                                    <div className="col-lg-12 offset-lg-1">
                                        <Input 
                                            type="text"
                                            id="diploma"
                                            name="diploma"
                                            placeholder="The name of your diploma"
                                            value={detailsGraduate1}
                                            setValue={setDetailsGraduate1}
                                        />
                                    </div>
                                </div>
            
                            <div className="row">
                                <div className="col-lg-12 offset-lg-1">
                                    <Input 
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={detailsGraduatePeriod1}
                                        setValue={setDetailsGraduatePeriod1}
                                    />
                                </div>
                            </div>
                        </div>: <Graduation diploma={diplomaData[0].name} date={diplomaData[0].date} />}
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1 text-center">
                            {updateMode? 
                            <div>
                                <div className="row">
                                    <div className="col-lg-12 offset-lg-1">
                                        <Input 
                                            type="text"
                                            id="diploma"
                                            name="diploma"
                                            placeholder="The name of your diploma"
                                            value={detailsGraduate2}
                                            setValue={setDetailsGraduate2}
                                        />
                                    </div>
                                </div>
            
                            <div className="row">
                                <div className="col-lg-12 offset-lg-1">
                                    <Input 
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={detailsGraduatePeriod2}
                                        setValue={setDetailsGraduatePeriod2}
                                    />
                                </div>
                            </div>
                        </div>: <Graduation diploma={diplomaData[1].name} date={diplomaData[1].date} />}
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1 text-center">
                            {updateMode? 
                            <div>
                                <div className="row">
                                    <div className="col-lg-12 offset-lg-1">
                                        <Input 
                                            type="text"
                                            id="diploma"
                                            name="diploma"
                                            placeholder="The name of your diploma"
                                            value={detailsGraduate3}
                                            setValue={setDetailsGraduate3}
                                        />
                                    </div>
                                </div>
            
                            <div className="row">
                                <div className="col-lg-12 offset-lg-1">
                                    <Input 
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={detailsGraduatePeriod3}
                                        setValue={setDetailsGraduatePeriod3}
                                    />
                                </div>
                            </div>
                        </div>: <Graduation diploma={diplomaData[2].name} date={diplomaData[2].date} />}
                            
                        </div>
                    </div>

                     
                </div>

                
                <div className="row">
                    <div className="col-lg-12 m-1 text-center">
                        {updateMode? <Button success onClick={() => {setUpdateMode(false);saveDetails()}}>Save</Button> : <Button danger onClick={() => setUpdateMode(true)}>Update</Button>}
                    </div>
                </div>

            </div>

        </div>
    )
}