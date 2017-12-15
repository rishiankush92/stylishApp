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
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Constants from '../../constants';
import Background from '../../components/common/Background';
import BackIcon from '../../components/common/BackButton';
import FormTextInput from '../../components/common/FormTextInput';
import FormSubmitButton from '../../components/common/SubmitButton';
import ReactMixin from "react-mixin";
import TimerMixin from "react-timer-mixin";

export default class Signup extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      fullName:'',
      email:'',
      phoneNum:'',
      password:''
    }
  }

  _handleScrollView(ref) {
    //alert('1');
    let context = this;
    context.setTimeout(() => {
      let scrollResponder = context.refs.mainScrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        ref,
        (Constants.BaseStyle.DEVICE_HEIGHT/100) * 35, //additionalOffset
        true
      );
    }, 100);
  }

  _resetScrollView(ref) {
    //alert('2');
    let context = this;
    context.setTimeout(() => {
      let scrollResponder = context.refs.mainScrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        ref,
        0, //(Screen.height/100) * 50, //additionalOffset
        true
      );
    }, 100);
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
              placeHolderText={Constants.i18n.common.fullName}
              onChangeText={(fullName)=>this.setState({fullName})}
              returnKey='next'
            />
            <FormTextInput 
              imageSource={Constants.Images.user.email}
              placeHolderText={Constants.i18n.common.email}
              onChangeText={(email)=>this.setState({email})}
              keyboard='email-address'
              returnKey='next'
            />
            <FormTextInput 
              imageSource={Constants.Images.user.phoneNum}
              placeHolderText={Constants.i18n.signup.phoneNum}
              onChangeText={(phoneNum)=>this.setState({phoneNum})}
              keyboard={'phone-pad'}
              returnKey='next'
            />
            <FormTextInput
              ref={'password'}
              onFocus={()=>{this._handleScrollView(ReactNative.findNodeHandle(this.refs.password));}}
              onBlur={()=>{this._resetScrollView(ReactNative.findNodeHandle(this.refs.password));}}
              imageSource={Constants.Images.user.password}
              placeHolderText={Constants.i18n.password.password}
              onChangeText={(password)=>this.setState({password})}
              secureText={true}

            />
            <FormSubmitButton 
              text={Constants.i18n.common.signup}
              style={styles.button}
            />
            
            <View style={styles.alreadyAccountView}>
              <Text style={styles.alreadyAccountText}>{Constants.i18n.signup.accountAlready}<Text style={styles.signupText}> {Constants.i18n.common.signin}</Text></Text>
            </View>
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
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 5,
    alignItems:'center'
  },
  orText:{
    color: Constants.Colors.White,
    fontWeight:'600',
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 2
  },
  socialIcons:{
    flexDirection:'row',
    justifyContent:'center'
  },
  fbImg:{
    height: Constants.BaseStyle.DEVICE_HEIGHT/100 * 6,
    width: Constants.BaseStyle.DEVICE_WIDTH/100 * 12,
    marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH/100 * 2,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 2
  },
  alreadyAccountText:{
    color: Constants.Colors.White,
    fontSize: 18
  },
  alreadyAccountView:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 3,
  },
  signupText:{
    color: Constants.Colors.White,
    fontSize: 18,
    fontWeight:'bold'
  }
});

ReactMixin(Signup.prototype, TimerMixin);
