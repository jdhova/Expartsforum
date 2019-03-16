
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {logoutUser} from '../../actions/authActions'


 class Navbar extends Component {

  handleLogout(e) {
  e.preventDefault();
  this.props.logoutUser()
  }

  render() {

    const {isAuthenticated, user} = this.props.auth

    const authAccess = (
      <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href ="Logout here" onClick = {this.handleLogout.bind(this)}
                    className="nav-item">
                    <img src = {user.avatar} alt={user.name} ></img>
                    Logout here
                    </a>
                </li>
               </ul>
    )

    const guestAccess = (
      <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                </ul>
    )

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
            <Link className="navbar-brand" to="/">Experts Forum</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/profiles"> Developers
                    </Link>
                </li>
                </ul>

                {isAuthenticated? authAccess:guestAccess } 
            </div>
            </div>
        </nav>          
  </React.Fragment> 
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect (mapStateToProps, {logoutUser})(Navbar);