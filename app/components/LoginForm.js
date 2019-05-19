import React, {Component} from "react";
import {Text, View, StyleSheet, AppRegistry, TextInput, TouchableOpacity} from "react-native";

export default class LoginForm extends Component {
	render() {
		return(
			<View style={styles.container}>

				<TextInput 
					style={styles.inputBoxUsername}
					placeholder="Username"
					placeholderTextColor="white"
					underlineColorAndroid='rgba(0,0,0,0)'
					selectionColor="rgba(255,255,255,0.3)"
					keyboardType="email-address"
					onSubmitEditing={()=> this.password.focus()}
				/>

				<TextInput 
					style={styles.inputBoxPassword}
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="white"
					underlineColorAndroid='rgba(0,0,0,0)'
					selectionColor="rgba(255,255,255,0.3)"
					ref={(input)=>this.password=input}
				/>

				<TouchableOpacity 
					style={styles.loginButton}
					underlayColor='yellow'
				>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>

			</View>
		);
	}
}

const styles= StyleSheet.create({
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputBoxUsername: {
		width:300,
		backgroundColor: 'rgba(255,255,255,0.3)',
		paddingHorizontal: 20,
		borderRadius: 50,
		color: 'white',
		fontSize: 16,
	},

	inputBoxPassword: {
		width:300,
		marginTop: 13,
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

AppRegistry.registerComponent( 'LoginForm',()=>LoginForm );