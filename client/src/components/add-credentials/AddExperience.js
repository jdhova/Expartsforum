
import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
// import InputGroup from '../common/InputGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createExperience } from '../../actions/profileActions';



 class AddExperience extends Component {
    constructor(props) {
        super(props)
        this.state = {

            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false

        }

    }

    componentWillReceiveProps(newProps) {
        if(newProps.errors) {
            console.log('ther are errors')
            this.setState({errors:newProps.errors})
        }
    }

    onSubmit = (e)=>  {
        e.preventDefault();
    
        const newExperience = {
          company: this.state.company,
          title: this.state.title,
          location: this.state.location,
          from: this.state.from,
          to: this.state.to,
          current: this.state.current,
          description: this.state.description
        };
    
        this.props.createExperience(newExperience, this.props.history);
      }
    
    
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onCheck = (e) => {
        this.setState({
          disabled: !this.state.disabled,
          current: !this.state.current
        });
      }

  render() {

    const {errors} = this.state
    return (
      <div>
          <div className = "Add-Experiece">
            <div className ="container">
                <div className = "row">
                <div className="col-md-8 m-auto">
                <Link to = '/dashboard'><button className = 'btn btn-light'>Go back</button></Link>
                <h1> Add Current Experience</h1>
                <p>Add your recent Work Experience</p>
                <form onSubmit = {this.onSubmit}>


                <TextFieldGroup 
                    placeholder=" Current Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                    />

                <TextFieldGroup  
                    placeholder = " Job title"
                    name= "title"
                    value={this.state.title}
                    onChange={this.onChange}
                    error = {errors.title}
     
                />    

                <TextFieldGroup 
                    placeholder = " Present location"
                    name= "location"
                    value={this.state.location}
                    onChange ={this.onChange}
                    error = {errors.location}
                    
                />
                <h6>From Date</h6>
                <TextFieldGroup 
                    name= "from"
                    type="date"
                    value={this.state.from}
                    onChange ={this.onChange}
                    error = {errors.from}
                    
                />
                <h6>to Date</h6>
                <TextFieldGroup 
                    name= "to"
                    type ="date"
                    value={this.state.to}
                    onChange ={this.onChange}
                    error = {errors.to}  
                    disabled = {this.state.disabled ? 'disabled' : ''}
                />  
                <h6>Current Date</h6>
                <div className ="form-check mb-4"> 
                    <input 
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                />
                <label htmlFor="current" className ="form-check-label">
                Current Job
                </label> 
                </div>

                <TextAreaFieldGroup 
                    placeholder = "Experence description"
                    name= "description"
                    value={this.state.description}
                    error = {errors.description}
                    onChange ={this.onChange}  
                    info ="tell us about your current and previoys experience"               
                    />  
                    <input type="submit"
                        value="Submit" 
                        className="btn btn-info btn-block mt4"/>

                </form>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    profile:state.profile,
    errors:state.errors
})

export default connect (mapStateToProps, {createExperience})(withRouter(AddExperience))
