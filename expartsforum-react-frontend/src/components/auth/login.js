

import React, { Component } from 'react'

 class Login extends Component {

     constructor(){
         super() 
         this.state = {
             email:"",
             password:"",
             errors:""
         }  

     }
     handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
     }

     handleSubmit = (e) => {
        e.preventDefault()
        const logininfo = {
                email:this.state.email,
                password:this.state.password  
      }
      console.log(logininfo)
    }


  render() {
    return (
        <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your Exparts Forum Account</p>
          
          <form onSubmit ={this.handleSubmit}>
            <div className="form-group">
              <input type="email" 
              className="form-control form-control-lg"
              placeholder="Email Address" 
              name="email" 
              value = {this.state.name}
              onChange ={this.handleChange}/>
            </div>
            
            <div className="form-group">
              <input type="password" 
              className="form-control form-control-lg" 
              placeholder="Password" 
              name="password"
              value = {this.state.password}
              onChange = {this.handleChange}/>
            </div>
            
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default Login;