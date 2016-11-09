/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TitleBar
} from 'react-native';

import noble from 'react-native-ble';
//import {LineChart} from 'react-native-chart-android/index.android'

export default class myproject extends Component {
  /*getLineData (argument) {
  		var data={
  			xValues:['1','2','3'],
  			yValues:[
  				{
  					data:[1.0,5.0,6.0],
  					label:'test1',
  					config:{
  						color:'blue'
  					}
  				},
  				{
  					data:[3.0,15.0,22],
  					label:'test2',
  					config:{
  						color:'red'
  					}
  				},
  				{
  					data:[7,12,22],
  					label:'test2',
  					config:{
  						color:'yellow'
  					}
  				}
  			]
  		};
  		return data;
  	}

  	getRandomData (argument) {
  		var data={};
  		data['xValues']=[];
  		data['yValues']=[
  			{
  				data:[],
  				label:'test1',
  				config:{
  					color:'blue'
  				}
  			}
  		];
  		for (var i = 0; i < 500; i++) {
  			data.xValues.push(i+'');
  			data.yValues[0].data.push(Math.random()*100);
  		};
  		return data;
  	}*/

  	render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
          </View>
        );

  	/*render() {
  	    return (<View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                  To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
                </Text>
              </View>);
  		*//*return (
  			<View style={styles.container}>
  				<TitleBar/>
  				<View style={styles.chartContainer}>
  					<LineChart style={{flex:1}} data={this.getLineData()}/>
  					<LineChart
  						style={{flex:1}}
  						data={this.getRandomData()}
  						visibleXRange={[0,30]}
  						maxVisibleValueCount={50}
  				        xAxis={{drawGridLines:false,gridLineWidth:1,position:"BOTTOM"}}
  				        yAxisRight={{enable:false}}
  				        yAxis={{startAtZero:false,drawGridLines:false,position:"INSIDE_CHART"}}
  				        drawGridBackground={false}
  				        backgroundColor={"WHITE"}
  				        description={"测试"}
  				        legend={{enable:true,position:'ABOVE_CHART_LEFT',direction:"LEFT_TO_RIGHT"}}
  						/>
  				</View>
  			</View>
  		);*//*
  	}*/
}

/*
const styles =  StyleSheet.create({
               	container:{
               		flex:1
               	},
               	chartContainer:{
               		flex:1
               	},
               	chart:{
               		flex:1
               	}
               });
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myproject', () => myproject);

