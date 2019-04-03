import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './Landing.css'

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (

<div className="container register" >
                <div className="row" >
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                   
                    </div>

                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Apply as a Employee</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        {/* // makes the div switch to opposite side */} 
                                        <div className="form-group">       
                                        </div>

                                    </div> 
                                    {/* // makes the div switch to opposite side */}

                                    <div className="col-md-6">   
                                        <div className="container">
                                          <div className="row">
                                            <div className="col-md-12 text-center">
                                            <h4 className="display-2 mb-4">Experts Forum</h4>
                                              <p className="lead">
                                                 {' '}
                                                 Create an Experts Profile, 
                                               </p>
                                               <hr />
                                              <Link to="/register" className="btn btn-lg btn-info mr-2">
                                              Sign Up
                                               </Link>
                                             <Link to="/login" className="btn btn-lg btn-light">
                                               Login
                                              </Link>
                                             </div>
                                           </div>                
                                           </div>
                                  </div>
                                </div>
                            </div>                
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Apply as a Hirer</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">

                                    <div className="col-md-16"> 
                                    <div className="container">
                                          <div className="row">
                                            <div className="col-md-12 text-center">
                                            <h4 className="display-2 mb-4">Experts Forum</h4>
                                              <p className="lead">
                                                 {' '}
                                                 Create an Experts Profile, 
                                               </p>
                                               <hr />
                                              <Link to="/register" className="btn btn-lg btn-info mr-2">
                                              Sign Up
                                               </Link>
                                             <Link to="/login" className="btn btn-lg btn-light">
                                               Login
                                              </Link>
                                             </div>
                                           </div>
                                          
                                           </div>
                                          </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);


