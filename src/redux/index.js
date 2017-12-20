import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';
import app from "./modules/app";
import nav from "./modules/nav";

export default function getRootReducer() {
    return combineReducers({
        toast,
        app,
        nav
    });
}