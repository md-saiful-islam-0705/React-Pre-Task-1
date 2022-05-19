
import React from 'react'
import "./Exercise3.css"

function Exercise3() {
    const handleAlertOne = (number) => {
        alert(`Button ${number} Is Clciked!`)
    }  
    const handleAlertTwo = (number) => {
        alert(`Button ${number} Is Clciked!`)
    }  
    const handleAlertThree = (number) => {
        alert(`Button ${number} Is Clciked!`)
    }
    
    return (
            <div className='alert-buttons'>
            <button onClick={() => handleAlertOne('1')}>Button 1</button>  
            <button onClick={() => handleAlertTwo('2')}>Button 2</button>  
            <button onClick={() => handleAlertThree('3')}>Button 3</button>  
            </div>
    )

  
  
}
export default Exercise3
