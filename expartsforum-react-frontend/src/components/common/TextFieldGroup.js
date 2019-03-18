
import React from 'react'
// import { PropTypes } from 'prop-types';


 const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
} ) => {
  return (
   
    <div className="form-group">
              <input type={type} 
              className={error ? "form-control form-control-lg is-invalid" :"form-control form-control-lg "}
              placeholder={placeholder}
              name={name} 
              value = {value}
              onChange ={onChange}
              disabled = {disabled}
              />
              {info && <small className= "form-text text-muted">{info}</small>}
             <div className="invalid-feedback">{error}</div>
            </div>
    
  )
};

export default TextFieldGroup

// TextFieldGroup.PropType = {
//     name: PropTypes.string.isRequired,
//     palceholder: PropTypes.string,
//     label: PropTypes.string.isRequired,
//     error: PropTypes.string.isRequired,
//     info: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.string.isRequired,
//     disabled: PropTypes.string.isRequired

// }


