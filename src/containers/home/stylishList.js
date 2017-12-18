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
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';

import _ from 'lodash';
import Constants from '../../constants';
import StarRating from '../../components/common/StarRating';

export default class StylishList extends Component {
  constructor(props){
    super(props);
    this.renderItem   = this.renderItem.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  /**
  * Render Footer
  */
  renderFooter(){
    let context=this;
    return(
      <View style={this.props.isFooterVisible?styles.paginationView:{height:0,width:0}}>
        { this.props.isFooterVisible &&
          <ActivityIndicator
            style={{alignSelf:"center"}} 
            size={"large"} 
            color={Constants.Colors.Black}/>
        }
      </View>
    )
  }

  /**
  * Extract Item Key
  */
  _keyExtractor = (item, index) => item._id;

  renderItem({item, index}){
    let context = this;
    return(
      <TouchableOpacity style={styles.listContainer}>
        <View style={{marginHorizontal:Constants.BaseStyle.DEVICE_WIDTH/100 * 3,marginVertical: Constants.BaseStyle.DEVICE_HEIGHT/100 * 2}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
              <Image source={Constants.Images.home.userProfileImg} style={styles.stylistImage} resizeMode='stretch'/>
            </View>
            <View style={{flex:2}}>
              <Text style={styles.username}>Ankush Rishi</Text>
              <Text style={styles.designation}>Stylist at Mohali</Text>
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
    );
  }

  render(){
  	return(
      <View style={[styles.container]}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          //onRefresh={()=>this.props.chefListRefresh()}
          //refreshing={this.props.isRefreshing}
          //onEndReachedThreshold={0.8}
          //onEndReached={()=>this.props.chefListonReachedEnd()}
          //keyExtractor={(item, index)=>this._keyExtractor(item, index)}
          enableEmptySections={true}
          renderItem={this.renderItem}
          //ListFooterComponent={this.renderFooter}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          //ListEmptyComponent={()=><NoRecord />}
        />
      </View>  
  	)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F19',
  },
  listContainer: {
    borderWidth:1,
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

