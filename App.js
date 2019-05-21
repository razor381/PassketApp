import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// import Routes from "./app/components/Routes"
import HomePage from "./app/pages/homePage/HomePage";

export default class Passket extends Component<Props> {
  render() {
    return (
    	// <Routes />
    	<HomePage />
    );
  }
}

AppRegistry.registerComponent('Passket', ()=>Passket);

/*const styles = StyleSheet.create({
 
});
*/