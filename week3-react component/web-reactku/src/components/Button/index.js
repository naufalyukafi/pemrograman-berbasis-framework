import React from 'react'
import './style.css'

const Button = ({title, type='primary'}) => {
  return (
    <div>
        <button className='button' style={{backgroundColor: type === 'primary' ? '#4CAF50' : 'red'}}>{title}</button>
    </div>
  )
}

export default Button