import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import {Actions} from 'react-native-router-flux'; 

import PassketLogo from "../../components/logo/PassketLogo"
import SignupForm from "../../components/SignupForm";

export default class SignupPage extends Component {

	login() {
		Actions.pop();
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar 
					backgroundColor="#520C0C"
					barStyle="light-content"
				/>
				<PassketLogo />
				<SignupForm />
				<View style={styles.loginTextArea}>
					<Text style={styles.questionText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.login}><Text style={styles.loginText}> Login</Text></TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#670A0A',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	loginTextArea: {
		flexGrow: 1,
		flexDirection: 'row',
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'flex-end',
	},

	questionText: {
		fontSize: 16,
		color: 'rgba(255,255,255,0.7)',
	},

	loginText: {
		color: 'white',
		fontWeight: '500',
	},

});

AppRegistry.registerComponent('SignupPage', ()=>SignupPage);