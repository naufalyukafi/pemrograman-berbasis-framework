import React from 'react'
import './style.css'

const InputField = ({label, type, placeholder, name}) => {
  return (
    <div>
        <label>{label}</label>
        <input 
          type={type}
          name={name} 
          placeholder={placeholder}
        />
    </div>
  )
}

export default InputField