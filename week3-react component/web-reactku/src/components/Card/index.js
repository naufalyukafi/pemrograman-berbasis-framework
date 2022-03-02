import React from 'react'
import './style.css'

const Card = ({children}) => {
  return (
    <div className='container__card'>
        <div>
            <h2 style={{textAlign: 'center'}}>Tugas Pertemuan Ketiga</h2>
            {children}
        </div>
    </div>
  )
}

export default Card