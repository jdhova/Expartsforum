
import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profileActions'
import Spinner from '../common/spinner'


 class Dashboard extends Component {

    componentDidMount (){
        this.props.getCurrentProfile()
    }
    
  render() {

    const {user} = this.props.auth
    const {profile, loading } = this.props.profile

    let dashboardContent

    if (profile === null || loading ) {
      dashboardContent = <Spinner/>
    } else {

      if(Object.keys(profile).length > 0) {
        dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>
      } else {

      }
      dashboardContent = (<div>
        <p className = 'lead text-muted'> Welcome {user.name}</p>
        <p> You do not have a profile please create one</p>
        <Link to = "/create-profile" className="btn btn-lg btn-info">
        Pleae Create Profile</Link>
      </div>
      )
    }
    
    return (
      <div className ="dashboard">
        <div className ="container">
          <div className ="row">
            <div className ="col-md-12">
              <h1 className ="display-4"> Dashboard</h1>
             {dashboardContent}
             </div>
          </div>
        </div>
      </div>
        
        
      
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile:state.profile
})

export default connect(mapStateToProps,{ getCurrentProfile})(Dashboard)
