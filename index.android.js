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
  PermissionsAndroid
} from 'react-native';

import {LineChart} from 'react-native-mp-android-chart';

class myproject extends Component {

    render() {
      return (
        <View style={styles.container}>
                <LineChart
                  style={styles.chart}
                  data={data}
                  description={{text: ''}}
                  legend={legend}

                  drawGridBackground={false}
                  borderColor={'teal'}
                  borderWidth={1}
                  drawBorders={true}

                  touchEnabled={true}
                  dragEnabled={true}
                  scaleEnabled={true}
                  scaleXEnabled={true}
                  scaleYEnabled={true}
                  pinchZoom={true}
                  doubleTapToZoomEnabled={true}

                  dragDecelerationEnabled={true}
                  dragDecelerationFrictionCoef={0.99}

                  keepPositionOnRotation={false}
                />
              </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

const data =
                       {
                                  datasets: [{
                                    yValues: [100, 110, 105, 115],
                                    label: 'Company X',
                                    config: {
                                      lineWidth: 2,
                                      drawCircles: false,
                                      drawCubic: true,
                                      highlightColor: 'red',
                                      color: 'red',
                                      drawFilled: true,
                                      fillColor: 'red',
                                      fillAlpha: 60,
                                      dashedLine: {
                                        lineLength: 20,
                                        spaceLength: 20
                                      }
                                    }
                                  }, {
                                    yValues: [90, 130, 100, 105],
                                    label: 'Company Y',
                                    config: {
                                      lineWidth: 1,
                                      drawCubic: true,
                                      drawCubicIntensity: 0.4,
                                      circleRadius: 5,
                                      drawHighlightIndicators: false,
                                      color: 'blue',
                                      drawFilled: true,
                                      fillColor: 'blue',
                                      fillAlpha: 45,
                                      circleColor: 'blue'
                                    }
                                  }],
                                  xValues: ['Q1', 'Q2', 'Q3', 'Q4']
                                };


const legend =   {
                        enabled: true,
                        textColor: 'blue',
                        textSize: 12,
                        position: 'BELOW_CHART_RIGHT',
                        form: 'SQUARE',
                        formSize: 14,
                        xEntrySpace: 10,
                        yEntrySpace: 5,
                        formToTextSpace: 5,
                        wordWrapEnabled: true,
                        maxSizePercent: 0.5,
                        fontFamily: 'monospace',
                        fontStyle: 1,
                        custom: {
                          colors: ['red', 'blue'],
                          labels: ['Company X', 'Company Y']
                        }
                      };




AppRegistry.registerComponent('myproject', () => myproject);