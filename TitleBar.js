/* @flow */
'use strict';

import React, { Component } from 'react';
import Button from './Button';
import {
  StyleSheet,
  View,
  NativeAppEventEmitter
} from 'react-native';

class TitleBar extends Component {
    onBack(argument) {
		 NativeAppEventEmitter.emit('back');
	}

	render() {
		return (
		  <View style={styles.container}>
		  	<Button text={"返回"} style={styles.button} onPress={this.onBack}/>
		  </View>
		);
	}
}



var styles = StyleSheet.create({
	container:{
		height:50,
		justifyContent:'flex-start',
		borderBottomWidth:1,
		borderBottomColor:'#e5e5e5'
	},
	button:{
		width:80
	}
});


module.exports = TitleBar;
