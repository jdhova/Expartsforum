import React, { Component } from 'react'
import {connect} from 'react-redux'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import InputGroup from '../common/inputGroup'
import SelectListGroup from '../common/SelectListGroup'

 class CreateProfile extends Component {
     constructor(props){
         super(props)
         this.state = {
             displaySocialInputs: false,
             handle:'',
             company:'',
             website:'',
            location:'',
            status: '' ,
            skills:'',  
             githubusername:'', 
            bio: '' ,
            twitter: '',
            facebook: '', 
            linkdedin:'',
            youtube:'',
            instagram: '',
            errors:{} 
        }
     }
  render() {
    return (
      <div className ='create-profile'>
        <div className ="container">
           <div className ="row">
                <div className ="col-md-8-auto">
                    <h1 className ="display-4 text-center">Create Experts Profile</h1>
                        <p className = "lead text-center">
                        Information to create a perferct Expert profile!!!
                    </p>
                    <small className ="d-block pb-3"> *= required fields</small>
                </div>
            </div> 
         </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profile:state.profile,
    errors: state.errors
})

export default connect(mapStateToProps)(CreateProfile)