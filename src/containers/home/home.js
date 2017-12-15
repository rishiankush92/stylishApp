/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative,{
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Constants from '../../constants';
import Background from '../../components/common/Background';

export default class HomeScreen extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={Constants.Images.user.customer_act} style={styles.userImg} resizeMode='stretch' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A1F19',
  },
  userImg:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 5,
    alignSelf: 'flex-end',
    marginRight: Constants.BaseStyle.DEVICE_WIDTH/100 * 5,
    height: Constants.BaseStyle.DEVICE_HEIGHT/100 * 10,
    width: Constants.BaseStyle.DEVICE_WIDTH/100 *18
  }
});

