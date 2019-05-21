import React, {Component} from "react";
import {AppRegistry, Text,View,StyleSheet, StatusBar, TouchableOpacity, Image} from "react-native";
import { Container, Header, Title, Content, Thumbnail, Footer, FooterTab, Button, Left, Right, Body, Icon,  Card, CardItem } from 'native-base';

import PassketLogo from "./logo/PassketLogo"

export default class AppBody extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			location: '',
			venue: '',
			qr: '',
			time: '',
		}
	}

	render() {

		let json = this.props.data;
		// this.setState({
			// name: json.title,
			// location: json.location,
		   	// venue: json.venue,
		   	// qr: json.qr,
		   	// time: json.time,
		// })

		return (
			<Content>
				<Card style={{flex: 0}}>
					<CardItem>
						<Left>
							<Thumbnail source={require('../images/leapfrog.png')} />
							<Body>
								<Text>Leapfron Rust Workshop</Text>
								<Text note>May 21, 2019</Text>
							</Body>
						</Left>
						<Right>
							<Icon style={{color:'#F04F4F'}} name="ios-information-circle" />
						</Right>
					</CardItem>

					<CardItem>
						<Icon active name="home" />
						<Text>Nayabazar, Kathmandu</Text>
					</CardItem>
					<CardItem>
						<Icon active name="pin" />
						<Text>Prime International College</Text>
					</CardItem>
					<CardItem>
						<Icon active name="time" />
						<Text>2PM - 5PM</Text>
					</CardItem>

					<CardItem>
						<Body style={{justifyContent:'center',alignItems: 'center'}}>
							<Text style={{color: 'brown'}}>
								Scan the Qr code below to gain access to event.
							</Text>
						<Image source={require('../images/qr_image.png')} style={{height: 250, width: 250, flex: 1}}/>
						</Body>
					</CardItem>

					<CardItem>
						<Left>
							<Button transparent textStyle={{color: '#87838B'}}>
								<Icon name="star" style={{marginRight: 5}} />
								<Text>1,926 stars</Text>
							</Button>
						</Left>
						<Body>
							<Button transparent textStyle={{color: '#87838B'}}>
								<Icon name="arrow-round-up" />
								<Text>856 going</Text>
							</Button>
						</Body>
						<Right>
							<Button transparent textStyle={{color: '#87838B'}}>
								<Icon name="thumbs-down" style={{marginRight: 6}}/>
								<Text>55 dislikes</Text>
							</Button>
						</Right>
					</CardItem>
				</Card>
			</Content>
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
		alignItems: 'center',
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

AppRegistry.registerComponent('AppBody', ()=>AppBody);