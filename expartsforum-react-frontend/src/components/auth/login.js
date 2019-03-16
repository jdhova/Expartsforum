
import React, { Component } from 'react'
import {connect } from 'react-redux';
import { loginUser} from '../../actions/authActions'

 class Login extends Component {
     constructor(){
         super() 
         this.state = {
             email:"",
             password:"",
             errors:""
         }  

     };
 
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }
  
  componentWillReceiveProps(newProps){
    if(newProps.auth.isAuthenticated){
      this.props.history.push('./dashboard')
    }

    if(newProps.errors) {
      this.setState({errors:newProps.errors})
    }
  };

     handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
     };

     handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
                email:this.state.email,
                password:this.state.password  
      }

      this.props.loginUser(userData)
    };

  render() {
        const {errors} = this.state
    return (
        <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your Experts Forum Account</p>
          
          <form onSubmit ={this.handleSubmit}>
            <div className="form-group">
              <input type="email" 
              className={errors.email ? "form-control form-control-lg is-invalid" :"form-control form-control-lg "}
              placeholder="Email Address" 
              name="email" 
              value = {this.state.name}
              onChange ={this.handleChange}/>
                <div className="invalid-feedback">{errors.email}</div>
            </div>
            
            <div className="form-group">
              <input type="password" 
              className={errors.password ? "form-control form-control-lg is-invalid": "form-control form-control-lg"} 
              placeholder="Password" 
              name="password"
              value = {this.state.password}
              onChange = {this.handleChange}/>
              <div className="invalid-feedback">{errors.password}</div>
            </div>
            
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, {loginUser})(Login);