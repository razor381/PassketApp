import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import {Actions} from 'react-native-router-flux';

import PassketLogo from "../../components/logo/PassketLogo"
import LoginForm from "../../components/LoginForm";

export default class LoginPage extends Component {

	signup() {
		Actions.signup();
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar 
					backgroundColor="#520C0C"
					barStyle="light-content"
				/>
				<PassketLogo />
				<LoginForm />
				<View style={styles.signupTextArea}>
					<Text style={styles.questionText}>Don't have an account?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupText}> Signup</Text></TouchableOpacity>
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

	signupTextArea: {
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

	signupText: {
		color: 'white',
		fontWeight: '500',
	},

});

AppRegistry.registerComponent('LoginPage', ()=>LoginPage);