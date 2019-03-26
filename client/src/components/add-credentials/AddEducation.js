

// import React, { Component } from 'react'
// import {Link,withRouter} from 'react-router-dom'
// import { connect } from 'react-redux';
// import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextFieldGroup';
// import InputGroup from '../common/InputGroup';
// import  {createEducation}  from '../../actions/profileActions';


// class AddEducation extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             school: "",
//             degree: "",
//             fieldofstudy: "",
//             from: "",
//             to:"",
//             current: false,
//             description:"",
//             errors: {},
//             default: false

//         };

//     }

//     componentWillReceiveProps(newProps){
//         if(newProps.errors) {
//             this.setState({errors: newProps.errors});
//         }
//     }



//     onSubmit = (e)=>  {
//         e.preventDefault();
    
//         const newEducation = {
//           school: this.state.school,
//           degree: this.state.degree,
//           fieldofstudy: this.state.fieldofstudy,
//           from: this.state.from,
//           to: this.state.to,
//           current: this.state.current,
//           description: this.state.description
//         };
    
//         this.props.createEducation(newEducation, this.props.history);
//       }
    
    
//       onChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//       }
    
//       onCheck = (e) => {
//         this.setState({
//           disabled: !this.state.disabled,
//           current: !this.state.current
//         });
//       }

    


//   render() {

//     const{errors} = this.state

//     return (
//       <div className = "Add-education">
//         <div className = "container">
//             <div className = "row">
//                 <div className="col-md-8 m-auto">
//                 <h1> Add Education</h1>
//                     <p>give us an idea of your more recent and previous Education history </p>
                    
//                     <form>

//                         <TextFieldGroup 
//                         placeholder= "School/University"
//                         name= "school"
//                         value= {this.state.school}
//                         onChange= {this.onChange}
//                         error= {errors.school}
//                         />
//                          <TextFieldGroup 
//                         placeholder= "degree Obtained"
//                         name= "degree"
//                         value={this.state.degree}
//                         onChange={this.onChange}
//                         error= {errors.degree}
//                         />
//                          <TextFieldGroup 
//                         placeholder= "fieldofstudy"
//                         name= "fieldofstudy"
//                         value={this.state.fieldofstudy}
//                         onChange={this.onChange}
//                         error = {errors.fieldofstudy}
//                         />

//                         <TextFieldGroup 
//                             name= "from"
//                             value={this.state.from}
//                             onChange={this.onChange}
//                             error = {errors.from}
//                             type ="date"
//                             info="start date of university of school"                              
//                         />

//                         <TextFieldGroup 
//                             name= "to"
//                             value={this.state.to}
//                             onChange={this.onChange}
//                             error = {errors.to}
//                             type ="date"    
//                             disabled = {this.state.disabled ? 'disabled' : ''}  
//                             info="end date of university of school"                         
//                         />
           
//                         <div className ="form-check mb-4"> 
//                             <input 
//                             type="checkbox"
//                             className="form-check-input"
//                             name="current"
//                             value={this.state.current}
//                             checked={this.state.current}
//                             onChange={this.onCheck}
//                             id="current"
//                         />
//                         <label htmlFor="current" className ="form-check-label">
//                         Check here if Current University or School (Still Studying)
//                         </label> 
//                 </div>
//                     <TextAreaFieldGroup
//                         placeholder="Program Description"
//                         name="description"
//                         value={this.state.description}
//                         onChange={this.onChange}
//                         error={errors.description}
//                         info="Tell us about the program that you were in"
//                         />

//                 <input type="submit"
//                         value="Submit" 
//                         className="btn btn-info btn-block mt4"/>
//                     </form>

//                 </div>
//              </div>
//         </div> 
//       </div>
//     )
//   }
// }

// // const mapStateToProps  = state => ({
// //     errors: state.errors,
// //     profile:state.profile
// // })

// const mapStateToProps = state => ({
//     profile: state.profile,
//     errors: state.errors
//   });
   


// // export default  connect (mapStateToProps,{createEducation})(withRouter(AddEducation));

// export default connect(mapStateToProps, { createEducation })(
//     withRouter(AddEducation)
//   );



import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

   
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newEducation = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.createEducation(newEducation, this.props.history);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck = (e) =>{
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Add any school, bootcamp, etc that you have attended
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* School"
                  name="school"
                  value={this.state.school}
                  onChange={this.onChange}
                  error={errors.school}
                />
                <TextFieldGroup
                  placeholder="* Degree or Certification"
                  name="degree"
                  value={this.state.degree}
                  onChange={this.onChange}
                  error={errors.degree}
                />
                <TextFieldGroup
                  placeholder="* Field of Study"
                  name="fieldofstudy"
                  value={this.state.fieldofstudy}
                  onChange={this.onChange}
                  error={errors.fieldofstudy}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder="Program Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us about the program that you were in"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createEducation })(
  withRouter(AddEducation)
);
