import React from 'react'
import "./Exercise2.css"

function Exercise2() {
    const handleAlert = () => {
        alert("Clciked!")
    }  
  return (
      <div className='alert-button'>
      <button onClick={handleAlert}>Click Me</button>  
      </div>
  )
  
}
export default Exercise2
