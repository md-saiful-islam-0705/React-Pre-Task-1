import React from 'react'
import "./Exercise6.css"


function MapList() {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    
  return (
      <div>
          <h3> Mapping Through A List And Rendering (With A Custom Component)</h3>
          <div className='list'>
              <List className="list-together" animals={animals.map(animal => <ul>{animal}</ul>)} >
              </List>
          </div>
             
      </div>
  )
}
function List(props) {
    return (
       <div>{props.animals}</div>
    )
}


export default MapList


