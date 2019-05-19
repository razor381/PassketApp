import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import Routes from "./app/components/Routes"

export default class Passket extends Component<Props> {
  render() {
    return (
    	<Routes />
    );
  }
}

AppRegistry.registerComponent('Passket', ()=>Passket);

/*const styles = StyleSheet.create({
 
});
*/