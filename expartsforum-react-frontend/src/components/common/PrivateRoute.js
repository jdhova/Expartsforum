import React from 'react'
 import { connect } from 'react-redux'
 import {Route, Redirect} from 'react-router-dom'

/// helps to protect route,, need to revisit this
const PrivateRoute =  ({component: Component, auth,...rest}) => (
    <Route
        {...rest}
            render = {props => 
            auth.isAuthenticated === true? (
                <Component{ ...props} />
            ) : (
                <Redirect to="/login"/>
            )
        }
     />
);


const mapStateToProps = state =>  ({
    auth:state.auth,
    profile:state.profule
})



export default connect(mapStateToProps)(PrivateRoute)