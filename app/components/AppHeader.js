import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class AppHeader extends Component {

	render() {
		return (

				<Header style={{backgroundColor: '#670A0A'}}>
					<StatusBar 
					backgroundColor="#520C0C"
					barStyle="light-content"
					/>
					<Left>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Passket</Title>
					</Body>
		        </Header>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#670A0A',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
	},

	signupTextArea: {
		// flexGrow: 1,
		// flexDirection: 'row',
		// marginBottom: 20,
		// justifyContent: 'center',
		// alignItems: 'flex-end',
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

AppRegistry.registerComponent('AppHeader', ()=>AppHeader);