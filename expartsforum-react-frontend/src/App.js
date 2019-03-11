import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/auth/register'
import Login from './components/auth/login'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
          <Navbar/>
          <div className ="container"/>
          <Route exact path = "/"  component={ Landing }/>
          <Route exact path = "/login" component={Login}/>
          <Route exact path = "/register" component={Register}/>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
