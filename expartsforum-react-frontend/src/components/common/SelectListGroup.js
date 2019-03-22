

import React from 'react'


 const SelectListGroup = ({
    name,
    value,
    error,
    info,
    options,
    onChange,
} ) => {
  
  const selectOptions = options.map(option => (
    <option key={option.label} 
      value={option.value}>
      {option.label}
    </option>
  ))
  return (
   
    <div className="form-group">
              <select 
              className={error ? "form-control form-control-lg is-invalid" :"form-control form-control-lg "}
              name={name} 
              value = {value}
              onChange ={onChange}>
              {selectOptions}
              </select>

              {info && <small className= "form-text text-muted">{info}</small>}
             <div className="invalid-feedback">{error}</div>
            </div>
    
  )
};

export default SelectListGroup


