import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import {Provider} from 'react-redux';
import store from './store'

import jwt_decode from 'jwt-decode'
import saveTokenToHead from './utils/saveTokenToHead'
import {setCurrentUser, logoutUser} from './actions/authActions'
import PrivateRoute from './components/common/PrivateRoute'

import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './components/auth/register'
import Login from './components/auth/login'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/create-profile/CreateProfile'
import { clearCurrentProfile } from './actions/profileActions';
import './App.css';


// import token

if (localStorage.jwtToken) {
  saveTokenToHead(localStorage.jwtToken)
  const extracted = jwt_decode(localStorage.jwtToken)
  // set user and make authenticated on several pages
  store.dispatch(setCurrentUser(extracted))

  // check token for logout
const currentTime = Date.now() / 1000
if(extracted.exp < currentTime ) {
  store.dispatch(logoutUser())
  store.dispatch(clearCurrentProfile())
// redirect to login page
  window.location.href ='/login'
  }
}





class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
            <div className="App">
            <Navbar/>
            <div className ="container"/>
            <Route exact path = "/"  component={Landing }/>
            <Route exact path = "/login" component={Login}/>
            <Route exact path = "/register" component={Register}/>
            <Switch>
            <PrivateRoute exact path = "/dashboard" component={Dashboard}/>
            </Switch>
            <Switch>
            <PrivateRoute exact path = "/create-profile" component={CreateProfile}/>
            </Switch>
            <Footer /> 
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;


// Personal Notes
// </Switch> used for private Routes
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//<img src = {user.avatar} alt={user.name} ></img> Logout here needs to be refixed
// valdation needs to be refixed. logout redirect needs to be checked again to be sure
// fix bootstrap for the input fields of profile.
// fix boothstrap for the photos section