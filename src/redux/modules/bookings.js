/* *
 * @file: bookings.js
 * @description: Booking Reducer.
 * @date: 21.12.2017
 * @author: Ankush Rishi
 * */

'use strict';

import {
  Platform,
} from 'react-native';
import _ from "lodash";
import { startLoading, stopLoading } from './app';
import { goBack, reset } from './nav';
//import { LOG_OUT, LOG_OUT_SUCCESS } from './user';
import {  selectLocation } from './location';
import RestClient from '../../utilities/RestClient';
import { ToastActionsCreators } from 'react-native-redux-toast';
//import { cancelAllLocalNotifications } from '../../utilities/PushNotification';

// Actions
const GET_STYLIST_LIST   = "GET_STYLIST_LIST";
const CLEAR_STYLIST_LIST = "CLEAR_LIST"; 

// Action Creators

export const getStylist = (data) => ({type: GET_STYLIST_LIST,data});
export const clearStylist = ()=>({type: CLEAR_STYLIST_LIST})

/**
* Fetch list of stylist's
*/
export const stylistList = (requestObject,callback) => {
  return dispatch => {
    RestClient.get("customer/stylist", requestObject).then((result) => {
      //console.log('result stylist list ******* ',result.data)
      if(result.status == '200'){
        if(requestObject.skip==0){
          dispatch(clearStylist());
        }
        if(_.isFunction(callback)){
          callback(result.data.total);
        }
        setTimeout(()=>dispatch(getStylist(result.data)),0);
      }else{
        dispatch(ToastActionsCreators.displayInfo(result.msg));
        if(_.isFunction(callback)){
          callback(false);
        }
      }
    }).catch(error => {
      console.log("error=> ", error)
      if(_.isFunction(callback)){
        callback(false);
      }
    });
  }
};

// Reducer

const initialState = {
  stylistList : []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_STYLIST_LIST:
          let stylistData = _.uniqBy([...state.stylistList,...action.data.stylistList],"_id")
        return { ...state, stylistList:stylistData};

        case CLEAR_STYLIST_LIST:
        return { ...state, stylistList:[]};

        // case LOG_OUT:
        // return initialState;

        default:
        return state;
    }
}
