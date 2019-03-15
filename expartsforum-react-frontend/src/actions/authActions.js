// Register User
import axios from 'axios';
import {GET_ERRORS}from './types'

export const registerUser = userData => dispatch => {
    axios
            .post('/api/users/register', userData)
            .then(res => console.log(userData))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload:err.response.data
                })
                
            )   
};

// Login Auth
export const loginUser = userData => dispatch => {
    axios 
        .post('/api/users/login', userData)
        .then(res => console.log(userData))
        .catch(err => 
            dispatch({
                type:GET_ERRORS,
                payload: err.response.data
            }))
};

