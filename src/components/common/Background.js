/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Constants from '../../constants';

export default class Background extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Constants.Images.user.logo} style={styles.logoImg} resizeMode='stretch' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A1F19',
    alignItems:'center'
  },
  logoImg:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 10,
    height: Constants.BaseStyle.DEVICE_HEIGHT/100 * 20,
    width: Constants.BaseStyle.DEVICE_WIDTH/100 *40,

  }
});
