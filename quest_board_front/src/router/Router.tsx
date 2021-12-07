import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ROUTES from './ROUTES';
import DashboardScreen from "../screens/DashboradScreen";
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LandingScreen from '../screens/LandingScreen'
import LearnMoreScreen from '../screens/LearnMoreScreen'
import ProfileScreen from '../screens/ProfileScreen'
import GuildsScreen from '../screens/GuildsScreen'
import LogoutScreen from '../screens/LogoutScreen'

const CustomRouter = () => {
  return(
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <DashboardScreen/>
        </Route>
        <Route exact path={ROUTES.DASHBOARD}>
          <DashboardScreen/>
        </Route>
        <Route exact path={ROUTES.GUILDS}>
          <GuildsScreen/>
        </Route>
        <Route exact path={ROUTES.LANDING}>
          <LandingScreen />
        </Route>
        <Route exact path={ROUTES.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={ROUTES.LOGOUT}>
          <LogoutScreen/>
        </Route>
        <Route exact path={ROUTES.REGISTER}>
          <RegisterScreen />
        </Route>
        <Route exact path={ROUTES.LEARNMORE}>
          <LearnMoreScreen />
        </Route>
        <Route exact path={ROUTES.PROFILE}>
          <ProfileScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default CustomRouter;