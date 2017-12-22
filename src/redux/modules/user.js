/*
 * @file: user.js
 * @description: User Reducer handles authentication, forgot password, change password apis.
 * @date: 19.12.2017
 * @author: Ankush Rishi
 * */
 'use strict';
import {
  Platform,
} from 'react-native';
import _ from "lodash";
import { startLoading, stopLoading, showToast, hideToast } from './app';
import { goBack, reset } from './nav';
//import { selectLocation } from './location';
import RestClient from '../../utilities/RestClient';
import { ToastActionsCreators } from 'react-native-redux-toast';
//import { destroySocketClient } from '../../utilities/SocketClient';
//import { cancelAllLocalNotifications } from '../../utilities/PushNotification';


// Actions
export const NEW_CONSUMER_USER      = "NEW_CONSUMER_USER";
//export const LOG_OUT                = "LOGOUT";
export const DEVICE_TOKEN           = "DEVICE_TOKEN";
//export const RATINGS                = "RATINGS";
export const GET_DETAILS            = "GET_DETAILS";
export const LOG_IN_SUCCESS         = "LOG_IN_SUCCESS";
export const GET_STYLIST_LIST       = "GET_STYLIST_LIST";
// Action Creators
export const CONSUMER_SIGNUP = (data) => ({ type: NEW_CONSUMER_USER,data});
export const LOG_SUCCESS = (data) => ({ type: LOG_IN_SUCCESS,data});
//export const LOG_OUT_SUCCESS = () => ({ type: LOG_OUT});
export const setDeviceToken = (data) => ({type:DEVICE_TOKEN,data});
//export const setRatings = (data) => ({type:RATINGS, data});
//export const getDetails = (data) => ({type:GET_DETAILS , data});
export const getStylist = (data) => ({type: GET_STYLIST_LIST,data});
/**
* Consumer Signup API.
*/
export const consumerSignup = (data) => {
  console.log('data ****** ',data)
  let requestObject = {
    full_name  : data.fullName,
    email     : data.email,
    mobile_number  : data.phoneNum,
    password  : data.password,
    user_type : "customer"
  }

  console.log()

  return dispatch => {
    dispatch(startLoading());
    RestClient.post("signup",requestObject).then((result) => {
      if(result){
        dispatch(stopLoading());
        dispatch(ToastActionsCreators.displayInfo(result.msg));
        dispatch(CONSUMER_SIGNUP({...data, source: "signup"}));
      }else{
        dispatch(stopLoading());
        dispatch(ToastActionsCreators.displayInfo(result.msg));
      }
    }).catch(error => {
      console.log("error=> " ,error)
      dispatch(stopLoading());
    });
  }
};

/**
* Login API
*/
export const loginRestAPI = (data) => {

  let requestObject = {
    email: data.email,
    password: data.password
  }

  return dispatch => {
    dispatch(startLoading());
    RestClient.post("login",requestObject).then((result) => {
      console.log('result ****** ',result)
      if(result.status === '200'){
        dispatch(stopLoading());
        dispatch(LOG_SUCCESS(result));
      }else{
        dispatch(stopLoading());
        dispatch(ToastActionsCreators.displayInfo(result.msg));
      }
    }).catch(error => {
      console.log("error=> " ,error)
      dispatch(stopLoading());
    });
  }
};

/**
* Fetch list of stylist's
*/
export const stylistList = (requestObject,callback) => {
  return dispatch => {
    RestClient.get("customer/stylist", requestObject).then((result) => {
      //console.log('result stylist list ******* ',result.data[0].results)
      if(result.status == '200'){
        // if(requestObject.page==0){
        //   dispatch(clearStylist());
        // }
        if(_.isFunction(callback)){
          callback(result.data[0].total);
        }
        setTimeout(()=>dispatch(getStylist(result.data[0].results)),0);
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

/**
* Initial state
*/
const initialState = {
  userDetails : null,
  deviceToken : "test",
  reviews     : [],
  stylistList : [],
};

/**
* Reducer
*/
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
          return { ...state, userDetails: action.data };

        case GET_DETAILS:
        return { ...state, userDetails : { ...state.userDetails , ...action.data } }

        case DEVICE_TOKEN:
          return { ...state, deviceToken:action.data };

        case GET_STYLIST_LIST:
        return { ...state, stylistList: action.data};

        // case RATINGS:
        // return { ...state , reviews : action.data };

        // case UPDATE_SETTINGS:
        // return {...state , userDetails : {
        //   ...state.userDetails,
        //   reminder : {
        //     status : action.data.status , 
        //     hours : action.data.hours 
        //   },
        //   getNotification : action.data.getNotification
        // }};
        // case LOG_OUT:
        //   return { ...initialState, deviceToken:state.deviceToken };

        default:
          return state;
    }
}
