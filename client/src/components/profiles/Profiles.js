import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getProfiles } from '../../actions/profileActions'
import Spinner from '../common/spinner'
import Profileitem from './Profileitem'


class Profiles extends Component {

    componentDidMount(){
        this.props.getProfiles()
    }
     

  render() {

    const { profiles,loading } = this.props.profile
        let profileItems;

        if (profiles === null || loading) {
            profileItems = <h4><Spinner/></h4>
                
    }  else {
        if(profiles.length > 0) {
            profileItems = profiles.map(profile => (
                <Profileitem key ={profile._id} profile={profile} />
            ))

        }else {
            profileItems =<h4> NO PROFILE</h4>
        }
    }
    

    return (
      <div className= "profiles">
        <div className="contaainer">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Experts Profiles</h1>  
                    <h3>Meet the experts </h3> 
                        {profileItems}
                    
                </div>
            </div>
        </div>
  
      </div>
    )
  }
}



const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)

