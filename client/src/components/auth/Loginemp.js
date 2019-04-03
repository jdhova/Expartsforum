

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { loginEmployer } from '../../actions/authActions';
// import TextFieldGroup from '../common/TextFieldGroup';


// class Loginemp extends Component {
//   constructor() {
//     super();
//     this.state = {
//          name:'',
//       email: '',
//       password: '',
//       errors: {}
//     };

//   }

//   componentDidMount() {
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push('/dashboard');
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.auth.isAuthenticated) {
//       this.props.history.push('/dashboard');
//     }

//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }

//   onSubmit =(e) => {
//     e.preventDefault();

//     const empLoginData = {
//         name: this.state.name,
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.loginEmployer(empLoginData);
//     console.log(empLoginData)
//   }

//   onChange =(e)  => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     const { errors } = this.state;

//     return (
//       <div className="login">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Log In</h1>
//               <p className="lead text-center">
//                 Sign in to your Experts account
//               </p>
//               <form onSubmit={this.onSubmit}>

//               <TextFieldGroup
//                   placeholder="Employer/Recruiters Name"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.onChange}
//                   error={errors.name}
//                 />

//                 <TextFieldGroup
//                   placeholder="Email Address"
//                   name="email"
//                   type="email"
//                   value={this.state.email}
//                   onChange={this.onChange}
//                   error={errors.email}
//                 />

//                 <TextFieldGroup
//                   placeholder="Password"
//                   name="password"
//                   type="password"
//                   value={this.state.password}
//                   onChange={this.onChange}
//                   error={errors.password}
//                 />
//                 <input type="submit" className="btn btn-info btn-block mt-4" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Loginemp.propTypes = {
//   loginEmployer: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(mapStateToProps, { loginEmployer })(Loginemp);




import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginEmployer } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { withRouter } from 'react-router-dom';


class Loginemp extends Component {
  constructor() {
    super();
    this.state = {
     name : '',
      email: '',
      password: '',
      errors: {}
    };

  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit =(e) => {
    e.preventDefault();

    const empLoginData = {
     name : this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginEmployer(empLoginData) ;
  }

  onChange =(e)  => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your Experts account
              </p>
              <form onSubmit={this.onSubmit}>

              <TextFieldGroup
                  placeholder="Email Address"
                  name="name"
                //   type="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />

                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Loginemp.propTypes = {
  loginEmployer: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginEmployer })(withRouter(Loginemp));
