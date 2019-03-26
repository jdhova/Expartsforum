import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getProfiles } from '../../actions/profileActions'
import Spinner from '../common/spinner'


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
        <h2>PROFILE HERE FOR PROFILE ITEM COMPONENT</h2>

        }else {
            profileItems =<h4> NO PROFILE</h4>
        }
    }

    // if(profiles === null || loading) {
    //     profileItems = <Spinner/>
    // } else {
    //     if (profiles.length > 0)
    //     <h2></h2>
    //     else{
    //         profileItems =<h4> NO PROFILE</h4>
    //     }
    // }

    

    return (
      <div className= "profiles">
        <div className="contaainer">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Experts Profiles</h1>  
                    <p>Meet the experts
                        {profileItems}
                    </p> 
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

