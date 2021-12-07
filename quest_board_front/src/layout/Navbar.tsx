import { Input } from "../components/Input"
import { Link } from "../components/Link"
import wording from "../wording";
import ROUTES from "../router/ROUTES"
import { useJobContext } from "../providers/JobProvider";
import NavbarInterface from "../types/components/navbar.interface"
import tokenAPI from "../api/token/tokenAPI";


export const Navbar = (props:NavbarInterface): JSX.Element => {
    
    const jobContext = useJobContext()

    return (
        <div className="col-lg-12">  
    
            <div className="row navbar">
    
                <div className="col-lg-6">
                    <Input 
                        type="search"
                        id="searchOffer"
                        name="searchOffer"
                        placeholder={wording.navbar.searchbar}
                        value={jobContext.searchJob}
                        setValue={jobContext.setSearchJob as React.Dispatch<React.SetStateAction<string>>}
                    />
                </div>
                
                <div className="col-lg-1">
                    <Link
                        href={ROUTES.DASHBOARD}
                        id={wording.navbar.quests}
                        active={true}
                    >
                        {wording.navbar.quests}
                    </Link>
                </div>
    
                <div className="col-lg-1">
                    <Link
                        href={ROUTES.GUILDS}
                        id={wording.navbar.guilds}
                        active={false}
                    >
                        {wording.navbar.guilds}
                    </Link>
                </div>
    
                <div className="col-lg-1">
                    { (tokenAPI.isConnected()) 
                        ?
                            <Link
                                href={ROUTES.PROFILE}
                                id={wording.navbar.profile}
                                active={false}
                            >
                                {wording.navbar.profile}
                            </Link>
                        : 
                            <Link
                                href={ROUTES.REGISTER}
                                id={wording.navbar.register}
                                active={false}
                            >
                                {wording.navbar.register}
                            </Link>
                    }
                </div>
    
                <div className="col-lg-1">
                    { (tokenAPI.isConnected())
                        ?
                            <Link
                                href={ROUTES.LOGOUT}
                                id={wording.navbar.logout}
                                active={false}
                            >
                                {wording.navbar.logout}
                            </Link>
                        : 
                            <Link
                                href={ROUTES.LOGIN}
                                id={wording.navbar.login}
                                active={false}
                            >
                                {wording.navbar.login}
                            </Link>
                    }
                </div>
    
            </div>
    
        </div>
    )

}