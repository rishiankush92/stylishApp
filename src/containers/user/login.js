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
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import Constants from '../../constants';
import Background from '../../components/common/Background';
import BackIcon from '../../components/common/BackButton';
import FormTextInput from '../../components/common/FormTextInput';
import FormSubmitButton from '../../components/common/SubmitButton';

export default class Login extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BackIcon />
        <Background />
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}  keyboardDismissMode='on-drag' keyboardShouldPersistTaps='always' ref='mainScrollView'>
          <View style={styles.inputView}>
            <FormTextInput 
              imageSource={Constants.Images.user.username}
              placeHolderText={Constants.i18n.common.username}
              style={styles.textInput}
              onChangeText={(username)=>this.setState({username})}
            />
            <FormTextInput 
              imageSource={Constants.Images.user.password}
              placeHolderText={Constants.i18n.password.password}
              style={styles.textInput}
              onChangeText={(password)=>this.setState({password})}
              secureText={true}
            />
            <FormSubmitButton 
              text='SIGN IN'
              style={styles.button}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A1F19',
  },
  inputView:{
    flex:1,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 10,
    alignItems:'center'
  },
  textInput:{
    
  },
  button:{
    
  }
});
