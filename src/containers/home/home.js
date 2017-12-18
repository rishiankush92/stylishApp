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
import Filters from '../../components/common/Filters';

export default class HomeScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      selected: 'distance',
      //changeFilterImg: true
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

  render() {
    console.log(this.state.selected)
    return (
      <View style={styles.container}>
        <Image source={Constants.Images.home.userProfileImg} style={styles.userImg} resizeMode='stretch' />
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={()=>this.distanceFilter()} style={styles.imageContainer}>
            <Image source={this.state.selected == 'distance' ? Constants.Images.home.distanceFilter : Constants.Images.home.distance } style={styles.filterStyle} resizeMode='stretch'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.ratingFilter()} style={styles.imageContainer}>
            <Image source={this.state.selected == 'rating' ? Constants.Images.home.ratingFilter : Constants.Images.home.rating} style={styles.filterStyle} resizeMode='stretch'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.priceFilter()} style={styles.imageContainer}>
            <Image source={this.state.selected == 'price' ? Constants.Images.home.priceFilter : Constants.Images.home.price} style={styles.filterStyle} resizeMode='stretch'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.calenderFilter()} style={styles.imageContainer}>
            <Image source={this.state.selected == 'calender' ? Constants.Images.home.calenderFilter : Constants.Images.home.calender} style={styles.filterStyle} resizeMode='stretch'/>
          </TouchableOpacity>
        </View>
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
    flexDirection:'row'
  },
  filterStyle:{
    height: Constants.BaseStyle.DEVICE_HEIGHT/100 * 10,
    width: Constants.BaseStyle.DEVICE_WIDTH/100 *18
  },
  imageContainer:{
    flex:1,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 4,
    alignItems:'center'
  }

});

