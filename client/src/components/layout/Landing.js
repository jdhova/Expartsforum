import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (

      


      


    //   <div class="row">
    //   <div class="col-xs-6 col-sm-4"><h2 className="display-2 mb-4">Experts Forum</h2>
    //              <p className="lead">
    //               {' '}
    //               Create an Experts Profile, 
    //              </p>
    //             <hr />
    //            <Link to="/register" className="btn btn-lg btn-info mr-2">
    //              Sign Up
    //            </Link>
    //             <Link to="/login" className="btn btn-lg btn-light">
    //               Login
    //            </Link>
    //       </div>

          
    //   <div class="col-xs-6 col-sm-4"></div>
    
    //   <div class="col-xs-6 col-sm-4">
      
    //   <h2 className="display-2 mb-4">Experts Forum</h2>
    //              <p className="lead">
    //               {' '}
    //               Create an Experts Profile, 
    //              </p>
    //             <hr />
    //            <Link to="/register" className="btn btn-lg btn-info mr-2">
    //              Sign Up
    //            </Link>
    //             <Link to="/login" className="btn btn-lg btn-light">
    //               Login
    //            </Link></div>
    // </div>



    





      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="display-2 mb-4">Experts Forum</h2>
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
