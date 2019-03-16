// Register User
import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER }from './types'
import saveTokenToHead from '../utils/saveTokenToHead'
import jwt_decode from 'jwt-decode'

export const registerUser = (userData, history) => dispatch => {
    axios
            .post('/api/users/register', userData)
            .then(res => history.push('/login'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload:err.response.data
                })
                
            )   
};

// Login Auth and token
export const loginUser = userData => dispatch => {
    axios 
        .post('/api/users/login', userData)
        .then(res => {
            // save token to localstorage
            const {token} = res.data
            // set token to ls
            localStorage.setItem('jwtToken',token);
            // link token to head
            saveTokenToHead(token)
        // extract user details from token using jwt decode
            const extracted = jwt_decode(token)
            // set the token to current user
            dispatch(setCurrentUser(extracted))
        })
        .catch(err => 
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            }))
};


export const setCurrentUser = extracted => {
    return {
        type: SET_CURRENT_USER,
        payload:extracted
    }
}

export const logoutUser =  () => dispatch =>{
    localStorage.removeItem('jwtToken')
    saveTokenToHead(false)
    dispatch(setCurrentUser({}))
}
