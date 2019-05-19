import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import {Actions} from 'react-native-router-flux';

import PassketLogo from "../../components/logo/PassketLogo"
import LoginForm from "../../components/LoginForm";

export default class HomePage extends Component {

	getData() {

		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				alert(responseJson.title);
			})
			.catch((error) => {
				console.error(error);
			}
		);

	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar 
					backgroundColor="#520C0C"
					barStyle="light-content"
				/>
				<PassketLogo />
				<View style={styles.signupTextArea}>
					<Text>This is homepage</Text>
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

AppRegistry.registerComponent('HomePage', ()=>HomePage);