import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {Router, Stack, Scene} from "react-native-router-flux";

import LoginPage from "../pages/loginPage/LoginPage";
import SignupPage from "../pages/signupPage/SignupPage";

export default class Routes extends Component<{}> {
	render() {
		return(

			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={LoginPage} title="Login"/>
			      <Scene key="signup" component={SignupPage} title="Signup"/>
			    </Stack>
		  </Router>

		);
	}
}

AppRegistry.registerComponent('Routes', ()=>Routes );
