

// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { withRouter, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import InputGroup from '../common/InputGroup';
// import SelectListGroup from '../common/SelectListGroup';
// import { createEmployerProfile } from '../../actions/profileActions';

//  class CreateEmpProfile extends Component {
//      constructor(props){
//          super(props);
//          this.state ={

//             displaySocialField: false,
//             fullname :'',
//             companyname: '',
//             hiringlocation: '',
//             contactnumber: '',
//             companywebsite: '',
//             companyemail: '',
//             youtube: '',
//             twitter: '',
//             facebook: '',
//             linkedin: '',
//             instagram: '',
//             errors:{}
//          }  
        
//      }

//      componentWillReceiveProps(nextProps) {
//         if (nextProps.errors) {
//           this.setState({ errors: nextProps.errors });
//         }
//       }
//        onSubmit = (e) => {
    
//             e.preventDefault()
    
//             const newEmpInfo = {

//                 fullname : this.state.fullname,
//                 companyname: this.state.companyname,
//                 hiringlocation: this.state.hiringlocation,
//                 contactnumber: this.state.contactnumber,
//                 companywebsite: this.state.companywebsite,
//                 companyemail: this.state.companyemail,
//                 youtube: this.state.youtube,
//                 twitter: this.state.twitter,
//                 facebook: this.state.facebook,
//                 linkedin: this.state.linkedin,
//                 instagram: this.state.instagram,
                
//             }
    
            
//             this.props.createEmployerProfile(newEmpInfo, this.props.history)
//             console.log(newEmpInfo,this.state.fullname,'heheh')
//         }

//         onChange = (e) => {
//             this.setState({[e.target.name]:e.target.value})
//             // console.log('chaning state', e.target.name, this.state.fullname) 
//          }


//   render() {
//         const {errors, displaySocialField} = this.state

//         let socialField;

//         if (displaySocialField) {
//             socialField = (
//               <div>
//                 <InputGroup
//                   placeholder="Twitter Profile URL"
//                   name="twitter"
//                   icon="fab fa-twitter"
//                   value={this.state.twitter}
//                   onChange={this.onChange}
//                   error={errors.twitter}
//                 />
      
//                 <InputGroup
//                   placeholder="Facebook Page URL"
//                   name="facebook"
//                   icon="fab fa-facebook"
//                   value={this.state.facebook}
//                   onChange={this.onChange}
//                   error={errors.facebook}
//                 />
      
//                 <InputGroup
//                   placeholder="Linkedin Profile URL"
//                   name="linkedin"
//                   icon="fab fa-linkedin"
//                   value={this.state.linkedin}
//                   onChange={this.onChange}
//                   error={errors.linkedin}
//                 />
      
//                 <InputGroup
//                   placeholder="YouTube Channel URL"
//                   name="youtube"
//                   icon="fab fa-youtube"
//                   value={this.state.youtube}
//                   onChange={this.onChange}
//                   error={errors.youtube}
//                 />
      
//                 <InputGroup
//                   placeholder="Instagram Page URL"
//                   name="instagram"
//                   icon="fab fa-instagram"
//                   value={this.state.instagram}
//                   onChange={this.onChange}
//                   error={errors.instagram}
//                 />
//               </div>
//             );
//     }

//     return (
//         <div className="create-profile">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 m-auto">
//                 <h1 className="display-4 text-center">Create Your Profile</h1>
//                 <p className="lead text-center">
//                   Let's get some information to make your profile stand out
//                 </p>
//                 <small className="d-block pb-3">* = required fields</small>
//                 <form onSubmit={this.onSubmit}>
//                   <TextFieldGroup
//                     placeholder="* fullname"
//                     name="fullname"
//                     value={this.state.fullname}
//                     onChange={this.onChange}
//                     error={errors.fullname}
//                     info="Kindly fill in your Full name"
//                   />
//                   {/* <SelectListGroup
//                     placeholder="Status"
//                     name="status"
//                     value={this.state.status}
//                     onChange={this.handleChange}
//                     // options={options}
//                     error={errors.status}
//                     info="Give us an idea of where you are at in your career"
//                   /> */}

//                   <TextFieldGroup
//                     placeholder="Company Name"
//                     name="companyname"
//                     value={this.state.companyname}
//                     onChange={this.onChange}
//                     error={errors.companyname}
//                     info="Kindly Enter the name of your company"
//                   />
//                   <TextFieldGroup
//                     placeholder="Hiring Location"
//                     name="hiringlocation"
//                     value={this.state.hiringlocation}
//                     onChange={this.onChange}
//                     error={errors.hiringlocation}
//                     info="What Company location would require expart services"
//                   />
//                   <TextFieldGroup
//                     placeholder="Contact Number"
//                     name="contactnumber"
//                     value={this.state.contactnumber}
//                     onChange={this.onChange}
//                     error={errors.contactnumber}
//                     info="Recruiter or Hiring Managers contact number"
//                   />
//                   <TextFieldGroup
//                     placeholder="* Company Website"
//                     name="companywebsite"
//                     value={this.state.companywebsite}
//                     onChange={this.onChange}
//                     error={errors.companywebsite}
//                     info=" Company Website"
//                   />
//                   <TextFieldGroup
//                     placeholder="Company Email"
//                     name="companyemail"
//                     value={this.state.companyemail}
//                     onChange={this.onChange}
//                     error={errors.companyemail}
//                     info="Kindly enter Hiring Personel or Recruiters contact email address"
//                   />
//                   {/* <TextAreaFieldGroup
//                     placeholder="Short Bio"
//                     name="bio"
//                     value={this.state.bio}
//                     onChange={this.handleChange}
//                     error={errors.bio}
//                     info="Tell us a little about yourself"
//                   /> */}
  
//                   <div className="mb-3">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         this.setState(prevState => ({
//                           displaySocialField: !prevState.displaySocialField
//                         }));
//                       }}
//                       className="btn btn-light"
//                     >
//                       Add Social Network Links
//                     </button>
//                     <span className="text-muted">Optional</span>
//                   </div>
//                   {socialField}
//                   <input
//                     type="submit"
//                     value="Submit"
//                     className="btn btn-info btn-block mt-4"
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//   }
// }


// const mapStateToProps = state => ({
//     profile:state.profile,
//     errors: state.errors
  
// })




    


// export default connect(mapStateToProps,{createEmployerProfile})
// (CreateEmpProfile)

// export default connect(mapStateToProps, { createEmployerProfile })(
//   withRouter(CreateEmpProfile)
// );




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import InputGroup from '../common/InputGroup';
// import SelectListGroup from '../common/SelectListGroup';
// import { createEmployerProfile } from '../../actions/profileActions';

// class CreateEmpProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displaySocialInputs: false,
//       fullname: '',
//       companyname: '',
//       hiringlocation: '',
//       contactnumber: '',
//       companywebsite: '',
//       companyemail: '',
//       twitter: '',
//       facebook: '',
//       linkedin: '',
//       youtube: '',
//       instagram: '',
//       errors: {}
//     }
    
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     const newEmpInfo = {
//        fullname: this.state.fullname,
//       companyname: this.state.companyname,
//       hiringlocation: this.state.hiringlocation,
//       contactnumber: this.state.contactnumber,
//       companywebsite: this.state.companywebsite,
//       companyemail: this.state.companyemail,
//       twitter: this.state.twitter,
//       facebook: this.state.facebook,
//       linkedin: this.state.linkedin,
//       youtube: this.state.youtube,
//       instagram: this.state.instagram
//     };

//     this.props.createEmployerProfile(newEmpInfo, this.props.history);
//   }

//   onChange = (e) =>  {
//     this.setState({[e.target.name]: e.target.value });
    
//   }
  

//   render() {
//     const { errors, displaySocialInputs } = this.state;

//     let socialInputs;

//     if (displaySocialInputs) {
//       socialInputs = (
//         <div>
//           <InputGroup
//             placeholder="Twitter Profile URL"
//             name="twitter"
//             icon="fab fa-twitter"
//             value={this.state.twitter}
//             onChange={this.onChange}
//             error={errors.twitter}
//           />

//           <InputGroup
//             placeholder="Facebook Page URL"
//             name="facebook"
//             icon="fab fa-facebook"
//             value={this.state.facebook}
//             onChange={this.onChange}
//             error={errors.facebook}
//           />

//           <InputGroup
//             placeholder="Linkedin Profile URL"
//             name="linkedin"
//             icon="fab fa-linkedin"
//             value={this.state.linkedin}
//             onChange={this.onChange}
//             error={errors.linkedin}
//           />

//           <InputGroup
//             placeholder="YouTube Channel URL"
//             name="youtube"
//             icon="fab fa-youtube"
//             value={this.state.youtube}
//             onChange={this.onChange}
//             error={errors.youtube}
//           />

//           <InputGroup
//             placeholder="Instagram Page URL"
//             name="instagram"
//             icon="fab fa-instagram"
//             value={this.state.instagram}
//             onChange={this.onChange}
//             error={errors.instagram}
//           />
//         </div>
//       );
//     }

//     // Select options for status
//     // const options = [
//     //   { label: '* Select Professional Status', value: 0 },
//     //   { label: 'Developer', value: 'Developer' },
//     //   { label: 'UX/UI Designer', value: 'UX/UI Designer' },
//     //   { label: 'Back end and Data Scientists', value: 'Back end and Data Scientists' },
//     //   { label: 'DevOps Engineers', value: 'DevOps Engineers' },
//     //   { label: 'Student or Learning', value: 'Student or Learning' },
//     //   { label: 'Booth-camp Graduates', value: 'Booth-camp Graduates' },
//     //   { label: 'Intern', value: 'Intern' },
//     //   { label: 'Other', value: 'Other' }
//     // ];

//     return (
//       <div className="create-profile">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Create Your Profile</h1>
//               <p className="lead text-center">
//                 Let's get some information to make your profile stand out
//               </p>
//               <small className="d-block pb-3">* = required fields</small>
//               <form onSubmit={this.onSubmit}>
//                 <TextFieldGroup
//                   placeholder="* Profile Handle"
//                   name="handle"
//                   value={this.state.fullname}
//                   onChange={this.onChange}
//                   error={errors.fullname}
//                   info="A unique handle for your profile URL. Your full name, company name, nickname"
//                 />
//                 {/* <SelectListGroup
//                   placeholder="Status"
//                   name="status"
//                   value={this.state.status}
//                   onChange={this.onChange}
//                   options={options}
//                   error={errors.status}
//                   info="Give us an idea of where you are at in your career" */}
                
//                 <TextFieldGroup
//                   placeholder="Company"
//                   name="company"
//                   value={this.state.companyname}
//                   onChange={this.onChange}
//                   error={errors.companyname}
//                   info="Could be your own company or one you work for"
//                 />
//                 <TextFieldGroup
//                   placeholder="Website"
//                   name="website"
//                   value={this.state.hiringlocation}
//                   onChange={this.onChange}
//                   error={errors.hiringlocation}
//                   info="Could be your own website or a company one"
//                 />
//                 <TextFieldGroup
//                   placeholder="Location"
//                   name="location"
//                   value={this.state.contactnumber}
//                   onChange={this.onChange}
//                   error={errors.contactnumber}
//                   info="City or city & state suggested (eg. Boston, MA)"
//                 />
//                 <TextFieldGroup
//                   placeholder="* Skills"
//                   name="skills"
//                   value={this.state.companywebsite}
//                   onChange={this.onChange}
//                   error={errors.companywebsite}
//                   info="Please use comma separated values (eg.
//                     HTML,CSS,JavaScript,PHP"
//                 />
//                 {/* <TextFieldGroup
//                   placeholder="Github Username"
//                   name="githubusername"
//                   value={this.state.githubusername}
//                   onChange={this.onChange}
//                   error={errors.githubusername}
//                   info="If you want your latest repos and a Github link, include your username"
//                 />
//                 <TextAreaFieldGroup
//                   placeholder="Short Bio"
//                   name="bio"
//                   value={this.state.bio}
//                   onChange={this.onChange}
//                   error={errors.bio}
//                   info="Tell us a little about yourself"
//                 /> */}

//                 <div className="mb-3">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       this.setState(prevState => ({
//                         displaySocialInputs: !prevState.displaySocialInputs
//                       }));
//                     }}
//                     className="btn btn-light"
//                   >
//                     Add Social Network Links
//                   </button>
//                   <span className="text-muted">Optional</span>
//                 </div>
//                 {socialInputs}
//                 <input
//                   type="submit"
//                   value="Submit"
//                   className="btn btn-info btn-block mt-4"
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// createEmployerProfile.propTypes = {
//   profile: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   profile: state.profile,
//   errors: state.errors
// });

// export default connect(mapStateToProps, { createEmployerProfile })(
//   withRouter(CreateEmpProfile)
// );


