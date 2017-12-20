/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import _ from 'lodash';
import Constants from '../../constants';

export default class ViewStylist extends Component {
  constructor(props){
    super(props);
  }

  render(){
  	return(
      <View style={[styles.container]}>
        <Text>Hello</Text>
      </View>  
  	)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F19',
  },
});

