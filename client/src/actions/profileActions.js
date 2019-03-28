import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_PROFILES
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profiles')
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
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const createExperience = (newExperience,history) => dispatch => {
    axios      
        .post('/api/profiles/experience', newExperience)
          .then(res => history.push('/dashboard'))
          .catch(err => 
            dispatch({
              type:GET_ERRORS,
              payload: err.response.data
            }))
}

export const createEducation = (newEducation,history) => dispatch => {
  axios      
      .post('/api/profiles/education', newEducation)
        .then(res => history.push('/dashboard'))
        .catch(err => 
          dispatch({
            type:GET_ERRORS,
            payload: err.response.data
          }))
}


export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading())
  axios
      .get('/api/profiles/all')
      .then(res =>
        dispatch({
          type: GET_PROFILES,
          payload:res.data
        })
        ).catch(err =>
          dispatch({
            type:GET_PROFILES,
            payload:err.response.data
          }))
}

export const getProfileByHandle = (handle) => dispatch => {
      dispatch(setProfileLoading())
      axios
        .get(`/api/profiles/handle/${handle}`)
        .then(res => 
          dispatch({
            type: GET_PROFILE,
            payload:res.data
          })
          ).catch(err =>
            dispatch({
              type:GET_PROFILE,
              err:err.response.data
            }))
}

// UPLOADING IMAGE



// DELETE EXPERIENCE
export const deleteExperience = (id) => dispatch => {
  axios
      .delete(`/api/profiles/experience/${id}`)
      .then(res => 
        dispatch({
          type:GET_PROFILE,
          payload:res.data
        })
      ).catch(err => 
        dispatch({
          type:GET_ERRORS,
          payload:err.response.data
        })
      )
}

 // Delete Education 

 export const deleteEducation = (id) => dispatch => {
   axios
      .delete(`/api/profiles/education/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload:res.data
        })
        ).catch(err =>
          dispatch({
            type:GET_ERRORS,
            payload:err.response.data
          }))
 }

// Delete Profile and user
 export const deleteAccount = () => dispatch => {
   if (window.confirm("Are you sure you want to delete this account?"))
  axios
    .delete('/api/profiles')
    .then(res =>
      dispatch ({
        type: SET_CURRENT_USER,
        payload:{}
      })
    ).catch(err =>
      dispatch ({
        type:GET_ERRORS,
        payload: err.response.data
      }))
 }



// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
};


// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};



