import React from 'react'
import "./Exercise8.css"

function RenderJson() {
     const datas = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ]
  return (
      <div className='data'>
          {
              datas.map(data => <DataList setup={data.setup} punchline={data.punchline} ></DataList> )
          }
    </div>
  )
}
function DataList(props) {
    return (
        <dib className="data-list">
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        </dib>
     )
 }
 export default RenderJson
