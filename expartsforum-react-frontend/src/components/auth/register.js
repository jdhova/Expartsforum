import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {connect } from 'react-redux';
import { registerUser} from '../../actions/authActions'


class Register extends Component {
    constructor (){
        super()
        this.state ={
            name: '',
            email:'',
            password:'',
            password2: '',
            errors:{}
        };
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    };

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
        
    };   

    handleSumbit = (e) => {
        e.preventDefault()
        const newUser ={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        } 
       this.props.registerUser(newUser, this.props.history);
        
    };        

  render() {

    const {errors} = this.state
    return (
        <div className="login">
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register </h1>
              <p className="lead text-center">Join the Experts</p>
              
                    <form onSubmit ={this.handleSumbit}>
                        <div className="form-group">
                            <input type="text"          
                            className=
                            {errors.name ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
                            placeholder="Name" 
                            name="name" 
                            value={this.state.name} 
                            onChange = {this.handleChange}/>
                            <div className="invalid-feedback">{errors.name}</div>
                        </div>
            
                        <div className="form-group">                        
                            <input type="email" className= {errors.email ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
                            placeholder="Email Address" 
                            name="email"
                            value={this.state.email} 
                            onChange = {this.handleChange}/>
                            <div className="invalid-feedback">{errors.email}</div>
                            </div>
                            <div>
                            <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                        </div>
                        
                        <div className="form-group">
                            <input type="password"
                             className= 
                             {errors.password ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
                            placeholder="Password" 
                            name="password"
                            value = {this.state.password}
                            onChange = {this.handleChange}/>
                            <div className="invalid-feedback">{errors.password}</div>
                        </div>

                        <div className="form-group">
                            <input type="password" 
                            className=
                            {errors.password2 ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}

                            placeholder="Confirm Password" 
                            name="password2"
                            value={this.state.password2}
                            onChange = {this.handleChange}/>
                            <div className="invalid-feedback">{errors.password2}</div>
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

export default connect(mapStateToProps, {registerUser})(withRouter(Register));