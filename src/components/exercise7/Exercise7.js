import { useState } from "react";
import "./Exercise7.css"


function MyForm() {
  const [ inputs, setInputs] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${inputs.firstName} ${inputs.lastName} `);
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
      <div className="form">
          <form className="form-input" onSubmit={handleSubmit}>
      <label className="">
            <input
            className="first-input"
            placeholder="Enter Your First Name"
            type="text" 
            name="firstName" 
            value={inputs.firstName || ""} 
            onChange={handleChange}
            />
        </label>
        <br />
      <label>
            <input 
            className="last-input"
            placeholder="Enter Your Last Name"
            type="text" 
            name="lastName" 
            value={inputs.lastName || ""} 
            onChange={handleChange}
             />
        </label>
        <br />
      <button className="button" onClickCapture={handleSubmit}>GREET ME</button>
    </form>
      </div>
  )
}
export default MyForm