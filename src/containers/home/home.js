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
  TouchableOpacity,
  Slider,
  FlatList
} from 'react-native';

import Constants from '../../constants';
import Background from '../../components/common/Background';
import Filters from '../../components/common/Filters';
import StylishList from './stylishList';
import StarRating from '../../components/common/StarRating';
import Idx from "../../utilities/Idx";

//import Calendar from 'react-native-calendar';

export default class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      selected: 'distance',
      isChecked: 'fifty'
    }
    this.isLoggedIn = false;
    if (Idx(this.props, _ => _.user.userDetails.auth.token)) {
      this.isLoggedIn = true;
      this.userToken = this.props.user.userDetails.auth.token;
      this.userId = this.props.user.userDetails.userId;
    }
  }

  distanceFilter(){
    this.setState({selected:'distance'})
  }

  ratingFilter(){
    this.setState({selected:'rating'})
  }

  priceFilter(){
    this.setState({selected:'price'})
  }

  calenderFilter(){
    this.setState({selected:'calender'})
  }

  checkUserStatus(){
    if(this.isLoggedIn){
      this.props.navigation.navigate("Notifications");
    }else{
      Alert.alert(
        "Sign in Required",
        "Please sign in to use this feature.",
        [
          {text: 'Cancel',  onPress: () => console.log('Cancel Pressed')},
          {text: 'Sign in', onPress: () =>{ this.props.navigation.navigate("Login", { 
            userType: "customer",
            initialIndex:1
          })}},
        ],
      { cancelable: false }
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Image source={Constants.Images.home.userProfileImg} style={styles.userImg} resizeMode='stretch' />
        <View style={styles.filterContainer}>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={()=>this.distanceFilter()}>
              <Image source={this.state.selected == 'distance' ? Constants.Images.home.distanceFilter : Constants.Images.home.distance } style={styles.filterStyle} resizeMode='stretch'/>
            </TouchableOpacity>
            {this.state.selected == 'distance' ? <Text style={{color:'rgb(252, 228, 149)'}}>Distance</Text> : <Text style={{color:'#494A48'}}>Distance</Text>}
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={()=>this.ratingFilter()}>
              <Image source={this.state.selected == 'rating' ? Constants.Images.home.ratingFilter : Constants.Images.home.rating} style={styles.filterStyle} resizeMode='stretch'/>
            </TouchableOpacity>
            {this.state.selected == 'rating' ? <Text style={{color:'rgb(252, 228, 149)'}}>Rating</Text> : <Text style={{color:'#494A48'}}>Rating</Text>}
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={()=>this.priceFilter()}>
              <Image source={this.state.selected == 'price' ? Constants.Images.home.priceFilter : Constants.Images.home.price} style={styles.filterStyle} resizeMode='stretch'/>
            </TouchableOpacity>
            {this.state.selected == 'price' ? <Text style={{color:'rgb(252, 228, 149)'}}>Price</Text> : <Text style={{color:'#494A48'}}>Price</Text>}
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={()=>this.calenderFilter()}>
              <Image source={this.state.selected == 'calender' ? Constants.Images.home.calenderFilter : Constants.Images.home.calender} style={styles.filterStyle} resizeMode='stretch'/>
            </TouchableOpacity>
            {this.state.selected == 'calender' ? <Text style={{color:'rgb(252, 228, 149)'}}>Calendar</Text> : <Text style={{color:'#494A48'}}>Calendar</Text>}
          </View>
        </View>
        {this.state.selected == 'distance' && <Slider style={styles.slider} thumbTintColor='rgb(252, 228, 149)' minimumValue={10} step={1} maximumValue={100} thumbTintColor='rgb(252, 228, 149)' maximumTrackTintColor='#494A48' minimumTrackTintColor='rgb(252, 228, 149)' />}
        {this.state.selected == 'rating' && <Slider style={styles.slider} thumbTintColor='rgb(252, 228, 149)' minimumValue={1} step={0.5} maximumValue={5} thumbTintColor='rgb(252, 228, 149)' maximumTrackTintColor='#494A48' minimumTrackTintColor='rgb(252, 228, 149)' />}
        {this.state.selected == 'price' && 
          <View style={{flexDirection:'row',marginHorizontal:Constants.BaseStyle.DEVICE_WIDTH/100*3,marginVertical:Constants.BaseStyle.DEVICE_HEIGHT/100*3}}>
            <TouchableOpacity onPress={()=>this.setState({isChecked:'fifty'})} style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Image source={this.state.isChecked == 'fifty' ? Constants.Images.home.radioCheck : Constants.Images.home.radioUncheck} style={{height:Constants.BaseStyle.DEVICE_HEIGHT/100*5,width:Constants.BaseStyle.DEVICE_WIDTH/100*8}} resizeMode='stretch'/>
              {this.state.isChecked == 'fifty' ? <Text style={{color:'rgb(252, 228, 149)'}}>$50 - $100</Text> : <Text style={{color:'#494A48'}}>$50 - $100</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({isChecked:'hundred'})} style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Image source={this.state.isChecked == 'hundred' ? Constants.Images.home.radioCheck : Constants.Images.home.radioUncheck} style={{height:Constants.BaseStyle.DEVICE_HEIGHT/100*5,width:Constants.BaseStyle.DEVICE_WIDTH/100*8}} resizeMode='stretch'/>
              {this.state.isChecked == 'hundred' ? <Text style={{color:'rgb(252, 228, 149)'}}>$100 - $150</Text> : <Text style={{color:'#494A48'}}>$100 - $150</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({isChecked:'onefifty'})} style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Image source={this.state.isChecked == 'onefifty' ? Constants.Images.home.radioCheck : Constants.Images.home.radioUncheck} style={{height:Constants.BaseStyle.DEVICE_HEIGHT/100*5,width:Constants.BaseStyle.DEVICE_WIDTH/100*8}} resizeMode='stretch'/>
              {this.state.isChecked == 'onefifty' ? <Text style={{color:'rgb(252, 228, 149)'}}>$150 - $200</Text> : <Text style={{color:'#494A48'}}>$150 - $200</Text>}
            </TouchableOpacity>
          </View>
        }
        <StylishList isLoggedIn={this.isLoggedIn} navigation={this.props.navigation}/>
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
  },
  filterContainer:{
    backgroundColor:'#1A1F19',
    flexDirection:'row',
    marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH/100 * 4,
  },
  filterStyle:{
    height: Constants.BaseStyle.DEVICE_HEIGHT/100 * 10,
    width: Constants.BaseStyle.DEVICE_WIDTH/100 *18
  },
  imageContainer:{
    flex:1,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 4,
    alignItems:'center'
  },
  slider:{ 
    marginTop:Constants.BaseStyle.DEVICE_HEIGHT/100 * 3,
    alignSelf:'center',
    width: Constants.BaseStyle.DEVICE_WIDTH/100 * 80,
    //color:'rgb(252, 228, 149)'
  }

});

