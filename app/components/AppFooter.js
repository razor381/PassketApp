import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import PassketLogo from "./logo/PassketLogo"

export default class AppFooter extends Component {

	render() {
		return (
		        <Footer>
					<FooterTab style={{backgroundColor: '#670A0A'}}>
						<Button vertical active  style={{backgroundColor: '#670A0A'}}>
							<Icon name="cash"/>
							<Text style={styles.whiteText}>Events</Text>
						</Button>
						<Button vertical>
							<Icon name="person" />
							<Text style={styles.whiteText}>Profile</Text>
						</Button>
						<Button vertical>
							<Icon name="compass" />
							<Text style={styles.whiteText}>Explore</Text>
						</Button>
						<Button vertical>
							<Icon name="calendar" />
							<Text style={styles.whiteText}>Calendar</Text>
						</Button>
		            </FooterTab>
		        </Footer>
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

	whiteText: {
		color: 'white',
	},

});

AppRegistry.registerComponent('AppFooter', ()=>AppFooter);