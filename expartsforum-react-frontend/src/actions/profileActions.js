// import axios from "axios";
// import { GET_PROFILE,PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from "./types"
// // import profileReducer from "../reducers/profileReducer";


// export const getCurrentProfile = () => dispatch => {
//     dispatch(setProfileLoading())

//     axios.get('/api/profiles')
//     .then(res => 
//     dispatch({
//         type:GET_PROFILE,
//         payload: res.data
//     })
//     )
//     .catch(err => 
//         dispatch({
//             type: GET_PROFILE,
//             payload: {}
//         }))
// }


// // create profile
// export const createProfile = (profileData, history) => dispatch => {
//     axios
//       .post('/api/profiles', profileData)
//       .then(res => history.push('/dashboard'))
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   };




// export const setProfileLoading = () => {
//     return {
//         type: PROFILE_LOADING
//     }
// }

// export const clearCurrentProfile = () => {
//     return {
//         type: CLEAR_CURRENT_PROFILE
//     }
// }




import axios from 'axios';
// import saveTokenToHead from '../utils/saveTokenToHead'
// import jwt_decode from 'jwt-decode'

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios

    .get("/api/profiles")
    // .get('http://localhost:3001/api/profiles')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profiles', profileData) 
    // .post('http://localhost:3001/api/profiles', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload:err.response.data,
      })
    );
};
        
// export const createProfile = profileData => dispatch => {
//     axios 
//         .post('/api/profiles', profileData)
//         .then(res => {
//             // save token to localstorage
//             const {token} = res.data
//             // set token to ls
//             localStorage.setItem('jwtToken',token);
//             // link token to head
//             saveTokenToHead(token)
//         // extract user details from token using jwt decode
//             const decoded = jwt_decode(token)
//             // set the token to current user
//             dispatch(setCurrentUser(decoded))
//             debugger
//         })
//         .catch(err => 
//             dispatch({
//                 type:GET_ERRORS,
//                 payload: err.response.data
//             }))
// };

// export const setCurrentUser = extracted => {
//     return {
//         type: SET_CURRENT_USER,
//         payload:extracted
//     }
// }

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
