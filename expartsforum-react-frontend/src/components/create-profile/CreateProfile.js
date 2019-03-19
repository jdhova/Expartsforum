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
     onSumbit = (e) => {
       e.preventDefault()
       console.log('submit')
     }

     onChange = (e) => {
      this.setState({[e.target.name] : e.target.value})
    }

  render() {
    const {errors} =this.state

    // select options for status
    const options = [
      {label: 'Select Proffesional Status', value: 0},
      {label: 'Developer', value: 'Developer'},
      {label: 'Jr Developer', value: 'Jr Developer'},
      {label: 'UX/UI Designer', value: 'UX/UI Designer '},
      {label: 'Just Graduated', value: 'Just Graduated'},
      {label: 'Intern', value: 'Intern'},
      {label: 'Student', value: 'Student'},
      {label: 'Other', value:'Other'}
    ]

    return (
      <div className ='create-profile'>
        <div className ="container">
           <div className ="row">
                <div className ="col-md-8-auto">
                    <h1 className ="display-4 text-center">Create Experts Profile</h1>
                        <p className = "lead text-center">
                        Information to create a perferct Expert profile!!!
                    </p>
                    <small className ="d-block pb-3"></small>
                    <form onSubmit = {this.onSubmit}>
                      <TextFieldGroup 
                        placeholder="* Profile Handle"
                        name="*handle"
                        value={this.state.handle}
                        onChange={this.onChange}
                        error={errors.handle}
                        info ="A unique handle for your profile URL"
                      />
                      <SelectListGroup 
                        placeholder="Status"
                        name="*Status"
                        value={this.state.status}
                        onChange={this.onChange}
                        options={options}
                        error={errors.status}
                        info ="Give us an idea of career status"
                        />
                        <TextAreaFieldGroup  
                        placeholder="company"
                        name="company"
                        value={this.state.company}
                        onChange={this.onChange}
                        error={errors.company}
                        info ="What company do you work for"
                        />
                        <TextAreaFieldGroup  
                        placeholder="website"
                        name="website"
                        value={this.state.website}
                        onChange={this.onChange}
                        error={errors.website}
                        info ="current website"
                        />
                        <TextAreaFieldGroup  
                        placeholder="location"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                        error={errors.location}
                        info ="current location"
                        />
                        <TextAreaFieldGroup  
                        placeholder="skills"
                        name="skills"
                        value={this.state.skills}
                        onChange={this.onChange}
                        error={errors.skills}
                        info ="Skills Please seperate with commas 
                        (example JvaScript,HTML,CSS)"
                        />

                        <TextAreaFieldGroup  
                        placeholder="githubusername"
                        name="githubusername"
                        value={this.state.githubusername}
                        onChange={this.onChange}
                        error={errors.githubusername}
                        info ="Please enter a Valid GitHub link"
                        />

                        <TextAreaFieldGroup  
                        placeholder="bio"
                        name="bio"
                        value={this.state.bio}
                        onChange={this.onChange}
                        error={errors.bio}
                        info ="Brief Summary about your self"
                        />
                        
                  </form>
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