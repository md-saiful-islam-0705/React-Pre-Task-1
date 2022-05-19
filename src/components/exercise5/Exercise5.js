import React from 'react'
import "./Exercise5.css"

function MapList() {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (
      <div className='map-list'>
          <h3>Mapping Through A List And Rendering</h3>
          {animals.map(animal => <li>{ animal}</li>)}  
    </div>
  )
 }

 export default MapList

