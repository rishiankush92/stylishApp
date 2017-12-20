
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert
} from 'react-native';
import Constants from '../../constants';
import StarRating from '../common/StarRating';

export default class ChefTabComponent extends Component {
  constructor(props){
    super(props);
    this.onItemPress = this.onItemPress.bind(this);
  }

  onItemPress(){
    if(this.props.isLoggedIn) {
      this.props.navigation.navigate('ViewStylist', {userDetails: this.props.item});
    }else{
      Alert.alert(
        "Sign in Required",
        "Please sign in to book stylist",
        [
          {text: 'Cancel',  onPress: () => console.log('Cancel Pressed')},
          {text: 'Sign in', onPress: () =>{ this.props.navigation.navigate("Login", { 
            userType: "customer" ,
            initialIndex:1
          })}},
        ],
      { cancelable: false }
      );
    }
  }

  render(){
    return(
      <TouchableOpacity style={styles.listContainer}
        onPress={()=>{
                //this.props.onCancel();
                this.onItemPress(this.props.item);
              }}
      >
        <View style={{marginHorizontal:Constants.BaseStyle.DEVICE_WIDTH/100 * 3,marginVertical: Constants.BaseStyle.DEVICE_HEIGHT/100 * 2}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Image source={Constants.Images.home.userProfileImg} style={styles.stylistImage} resizeMode='stretch'/>
            </View>
            <View style={{flex:2}}>
              <Text style={styles.username}>Jessica Hutchion</Text>
              <Text style={styles.designation}>Stylist at Redbox Barber</Text>
            </View>
            <View style={{flex:2}}>
              <View style={styles.bookNow}>
                <Text>BOOK NOW</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Text style={styles.boldText}>Rating</Text>
              <StarRating
                editable={false}
                rating={4}
              />
            </View>
            <View style={{flex:1}}>
              <Text style={styles.boldText}>Start From</Text>
              <Text style={styles.desc}>$150</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.boldText}>Distance</Text>
              <Text style={styles.desc}>0.5mi</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor:'#292E27',
    marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH/100 * 6,
    marginVertical: Constants.BaseStyle.DEVICE_HEIGHT/100 * 1.5
  },
  paginationView:{
    height:50,
    backgroundColor:Constants.Colors.Transparent,
    justifyContent:"center"
  },
  stylistImage:{
    height: 50,
    width: 50,
    borderRadius:25
  },
  username:{
    fontSize:Constants.BaseStyle.FONT_SIZE_TITLE,
    fontWeight: Constants.BaseStyle.BOLD,
    color:'rgb(252, 228, 149)'
  },
  designation: {
    color:Constants.Colors.White
  },
  bookNow: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(252, 228, 149)',
    padding: Constants.BaseStyle.DEVICE_HEIGHT/100 * 1.5,
    borderRadius:20
    //width:Constants.BaseStyle.DEVICE_WIDTH/100 * 25
  },
  boldText: {
    color: Constants.Colors.White,
    fontWeight: Constants.BaseStyle.BOLD,
  },
  desc:{
    color: 'rgb(252, 228, 149)',
    fontWeight: Constants.BaseStyle.BOLD,
  }
});