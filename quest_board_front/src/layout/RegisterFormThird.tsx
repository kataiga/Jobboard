import {Button} from "../components/Button";
import {H3text} from "../components/H3text";
import {Select} from "../components/Select"
import wording from "../wording";
import { useAuthContext } from "../providers/AuthProvider";
import qs from 'qs';


import React from "react";


export const RegisterFormThird = (): JSX.Element => {
    const authContext = useAuthContext()
    const [avatarObject, setAvatarObject] = React.useState({} as {[index: string] : string})
    

    React.useEffect(() => {
        authContext.setAvatar(`https://avataaars.io/?${qs.stringify({...avatarObject, avatarStyle: "Circle"})}`)
    }, [avatarObject])

    const handleSelectChanging = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let newElem = {} as {[index : string] : string}
        newElem[event.target.name] = event.target.options[event.target.selectedIndex].value
        setAvatarObject({...avatarObject, ...newElem})
    }

    return(
        <div className="col-lg-12 align-self-center">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <H3text>{wording.registerScreen.title.third}</H3text>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.hair.name}
                            name={wording.registerScreen.avatar.hair.name}
                            options={wording.registerScreen.avatar.hair.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.accessories.name}
                            name={wording.registerScreen.avatar.accessories.name}
                            options={wording.registerScreen.avatar.accessories.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.hairColor.name}
                            name={wording.registerScreen.avatar.hairColor.name}
                            options={wording.registerScreen.avatar.hairColor.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.facialHair.name}
                            name={wording.registerScreen.avatar.facialHair.name}
                            options={wording.registerScreen.avatar.facialHair.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.facialHairColor.name}
                            name={wording.registerScreen.avatar.facialHairColor.name}
                            options={wording.registerScreen.avatar.facialHairColor.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.clothes.name}
                            name={wording.registerScreen.avatar.clothes.name}
                            options={wording.registerScreen.avatar.clothes.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.colorFabric.name}
                            name={wording.registerScreen.avatar.colorFabric.name}
                            options={wording.registerScreen.avatar.colorFabric.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.eyes.name}
                            name={wording.registerScreen.avatar.eyes.name}
                            options={wording.registerScreen.avatar.eyes.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.eyebrow.name}
                            name={wording.registerScreen.avatar.eyebrow.name}
                            options={wording.registerScreen.avatar.eyebrow.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.mouth.name}
                            name={wording.registerScreen.avatar.mouth.name}
                            options={wording.registerScreen.avatar.mouth.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 m-1">
                            <Select
                            selectID={wording.registerScreen.avatar.skin.name}
                            name={wording.registerScreen.avatar.skin.name}
                            options={wording.registerScreen.avatar.skin.choice}
                            handleSelectChange={handleSelectChanging}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 text-center align-self-center">
                    <img className="img-fluid animated fadeIn" src={authContext.avatar}/>
                </div>
            </div>
            

            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <Button primary onClick={() => authContext.sendRegister({
                                first_name: authContext.firstname, 
                                last_name: authContext.lastname,
                                birth: authContext.date,
                                email: authContext.email,
                                password: authContext.password,
                                avatar: authContext.avatar,
                            })}
                            >
                                {wording.registerScreen.boutton}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}