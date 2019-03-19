
import React from 'react'
// import { PropTypes } from 'prop-types';


 const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    type,
    onChange,
} ) => {
  return (
   
    <div className="form-group">
              <textarea 
              className={error ? "form-control form-control-lg is-invalid" :"form-control form-control-lg "}
              placeholder={placeholder}
              name={name} 
              value = {value}
              onChange ={onChange}
              />
              {info && <small className= "form-text text-muted">{info}</small>}
             <div className="invalid-feedback">{error}</div>
            </div>
    
  )
};

export default TextAreaFieldGroup


