/*
 * @file: routes.js
 * @description: For defining and importing all screens/routes
 * @date: 14.12.2017
 * @author: Ankush Rishi
 * */


import Login from "../containers/user/login";
import Signup from "../containers/user/signup";
import Home from "../containers/home/home";

// export list of routes.
export default routes = {
	Home   : { screen: Home },
	Signup : { screen: Login },
	Login  : { screen: Signup },
};