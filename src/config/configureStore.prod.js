/*
 * @file: configureStore.prod.js
 * @description: Configure/creating redux store with thunk,reducer etc
 * @date: 14.12.2017
 * @author: Ankush Rishi
 * */

import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage, Platform } from "react-native";
import thunk from "redux-thunk";
import reducer from "../redux";

/* *
 * @function: Configuring and creating redux store 
 * */
export default function configureStore() {

    /* *
     * @function: Creating redux store
     * */
    const store = createStore(
        reducer(),
        // compose(
        //     autoRehydrate()
        // ),
        applyMiddleware(thunk)
    );

    /* *
     * @function: Persisting store for save all store's data except blacklisted reducers in device's memory
     * */
    // persistStore(
    //     store,
    //     { blacklist: ["app", "toast"], storage: AsyncStorage },
    //     () => {
    //         let storeData = store.getState();
    //     }
    // );
    
    /* *
     * @return: returning store when it's successfully created 
     * */
    return store;
}