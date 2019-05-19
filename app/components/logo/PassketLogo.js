import React, {Component} from "react";
import {AppRegistry, Text, View, StyleSheet, Image} from "react-native";

export default class PassketLogo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image 
					style={styles.logo}
					source={require('../../images/PassketLogo.png')}
				/>
				<Text style={styles.appName}>Passket</Text>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	container: {
		flexGrow: 1,
		marginTop: 70,
		// alignItems: 'center',
		// justifyContent: 'center',
	},

	logo: {
		width: 100,
		height: 100,
		marginLeft: 14,
	},

	appName: {
		color: "white",
		fontSize: 30,
	},
});

AppRegistry.registerComponent('PassketLogo', ()=>PassketLogo);