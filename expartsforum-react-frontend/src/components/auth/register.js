import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';


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
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
        
    }
    

    handleSumbit = (e) => {
        e.preventDefault()
        const newUser ={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2


        } 
        axios
            .post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(errors => console.log(errors.response.data))

            // const errors = this.state.errors
            // this.setState ({errors : errors.name})
        
    }        

  render() {

    const {errors} = this.state
    // const errors = this.state.errors
 
    return (
        <div className="login">
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register </h1>
              <p className="lead text-center">Join the Exparts</p>
              

                    <form onSubmit ={this.handleSumbit}>
                        <div className="form-group">
                        <input type="text" 
                        
                        className= {errors.name ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
                        
                        // if (errors.name.isEmpty)
                        
                        // {classnames("form-control form-control-lg",{
                        //     "is-invalid ":errors.name
                        //  })}

                        placeholder="Name" 
                        name="name" 
                        value={this.state.name} 
                        onChange = {this.handleChange}/>
                        </div>

                        {errors.name &&(
                            <div className= "invalid-feedback"></div>
                        )}
                        

                        <div className="form-group">
                        
                        <input type="email" className={classnames("form-control form-control-lg",{
                            'is-invalid': errors.name
                        })}

                        placeholder="Email Address" 
                        name="email"
                        value={this.state.email} 
                        onChange = {this.handleChange}
                        />
                        </div>

                        {errors.email &&(
                            <div className= "invalid-feedback"></div>
                        )}

                        <div>
                        <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                        </div>
                        
                        <div className="form-group">

                            <input type="password" className={classnames("form-control form-control-lg",{
                                'is-invalid':errors.password
                            })} 
                            placeholder="Password" 
                            name="password"
                            value = {this.state.password}
                            onChange = {this.handleChange}/>
                        </div>

                        {errors.password&&(
                            <div className ="invalid-feedback"></div>
                        )}

                        <div className="form-group">

                        <input type="password" 
                        className={classnames("form-control form-control-lg",{
                            'is-invalid': errors.password2
                        })}

                        placeholder="Confirm Password" 
                        name="password2"
                        value={this.state.password2}
                        onChange = {this.handleChange}/>
                        </div>
                        {errors.password2 &&(
                            <div className ="invalid-feedback"></div>
                        )}

                           <input type="submit" className="btn btn-info btn-block mt-4" />
                           </form>
            </div>
            </div>
        </div>
        </div>
    )
  }
}

export default Register;