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
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { LoginManager,AccessToken } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'
// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginButton,
//   AccessToken
// } = FBSDK;

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
  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile','email']).then(function(result) {
      if (result.isCancelled) {
        console.log("Login Cancelled");
      } else {
        console.log('testttt',result)
        AccessToken.getCurrentAccessToken().then((data) => {
      
          fetch('https://graph.facebook.com/v2.11/me?fields=email,name&access_token=' + data.accessToken.toString())
          .then((response) => response.json())
          .then((json) => {
            console.log('sdfda12143546546',json.email)
            
            // Some user object has been set up somewhere, build that user here
            // user.name = json.name
            // user.id = json.id
            // user.user_friends = json.friends
            // user.email = json.email
            // user.username = json.name
            // user.loading = false
            // user.loggedIn = true
            // user.avatar = setAvatar(json.id)   
          })
          .catch(() => {
            
          })

        })
      
        console.log("Login Success permission granted:" + result.grantedPermissions);
      }
    }, function(error) {
       console.log("some error occurred!!");
    })
  }
  _instagramLogin() {
  

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
              onChangeText={(username)=>this.setState({username})}
            />
            <FormTextInput 
              imageSource={Constants.Images.user.password}
              placeHolderText={Constants.i18n.password.password}
              onChangeText={(password)=>this.setState({password})}
              secureText={true}
            />
            <FormSubmitButton 
              text={Constants.i18n.common.signin}
              style={styles.button}
            />
            <Text style={styles.orText}>{Constants.i18n.common.or}</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity onPress={this._fbAuth}>
              
                <Image source={Constants.Images.user.facebook} style={styles.fbImg} resizeMode='stretch'/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.refs.instagramLogin.show()} >
                <Image source={Constants.Images.user.instagram} style={styles.fbImg} resizeMode='stretch'/>
              </TouchableOpacity>
              
            </View>

  <InstagramLogin
    ref='instagramLogin'
    clientId='99d144c0fa5044c0abc9c53f03fa56f0'
    scopes={['public_content', 'follower_list']}
    onLoginSuccess={(token) => this.setState({ token })}
/>


            <View style={styles.noAccountView}>
              <Text style={styles.noAccountText}>{Constants.i18n.signin.noAccount}<Text style={styles.signupText}> {Constants.i18n.common.signup}</Text></Text>
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
  noAccountText:{
    color: Constants.Colors.White,
    fontSize: 18
  },
  noAccountView:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 8,
  },
  signupText:{
    color: Constants.Colors.White,
    fontSize: 18,
    fontWeight:'bold'
  }
});
