import React, {Component} from "react";
import {Text, View, StyleSheet, AppRegistry, TextInput, TouchableOpacity} from "react-native";

export default class SignupForm extends Component {
	render() {
		return(
			<View style={styles.container}>

				<TextInput 
					style={styles.inputBoxUsername}
					placeholder="Email"
					placeholderTextColor="white"
					underlineColorAndroid='rgba(0,0,0,0)'
					selectionColor="rgba(255,255,255,0.3)"
					keyboardType="email-address"
				/>

				<TextInput 
					style={styles.inputBoxUsername}
					placeholder="Username"
					placeholderTextColor="white"
					underlineColorAndroid='rgba(0,0,0,0)'
					selectionColor="rgba(255,255,255,0.3)"
					keyboardType="email-address"
				/>

				<TextInput 
					style={styles.inputBoxPassword}
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="white"
					underlineColorAndroid='rgba(0,0,0,0)'
					selectionColor="rgba(255,255,255,0.3)"
				/>

				<TextInput 
					style={styles.inputBoxPassword}
					placeholder="Confirm Password"
					secureTextEntry={true}
					placeholderTextColor="white"
					underlineColorAndroid='rgba(0,0,0,0)'
					selectionColor="rgba(255,255,255,0.3)"
				/>

				<TouchableOpacity 
					style={styles.loginButton}
					underlayColor='yellow'
				>
					<Text style={styles.loginButtonText}>Signup</Text>
				</TouchableOpacity>

			</View>
		);
	}
}

const styles= StyleSheet.create({
	container: {
		flexGrow: 1,
		marginTop: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputBoxUsername: {
		width:300,
		marginBottom: 13,
		backgroundColor: 'rgba(255,255,255,0.3)',
		paddingHorizontal: 20,
		borderRadius: 50,
		color: 'white',
		fontSize: 16,
	},

	inputBoxPassword: {
		width:300,
		marginBottom: 13,
		backgroundColor: 'rgba(255,255,255,0.3)',
		paddingHorizontal: 20,
		borderRadius: 50,
		color: 'white',
		fontSize: 16,
	},

	loginButton: {
		backgroundColor: 'rgba(255,255,255,0.9)',
		width: 150,
		marginTop: 23,
		paddingHorizontal: 20,
		paddingVertical: 13,
		borderRadius: 50,
		color: 'white',
		fontSize: 17,
		alignItems: 'center',
	},

	loginButtonText: {
		fontSize: 16,
		fontWeight: '500',
		color: 'black',
	},
});

AppRegistry.registerComponent( 'SignupForm',()=>SignupForm );