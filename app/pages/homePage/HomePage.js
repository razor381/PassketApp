import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import {Actions} from 'react-native-router-flux';
import {Container} from 'native-base';

import PassketLogo from "../../components/logo/PassketLogo";
import AppHeader from "../../components/AppHeader";
import AppBody from "../../components/AppBody";
import AppFooter from "../../components/AppFooter";

export default class HomePage extends Component {

	constructor () {
		super();
		this.state = {
			data:[]
		}
	}

	getData() {
		return fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({data:responseJson});
				// alert(responseJson.title);
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
				<Container>
					<AppHeader />
					<AppBody data={this.state.data} />
					<AppFooter />
				</Container>
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