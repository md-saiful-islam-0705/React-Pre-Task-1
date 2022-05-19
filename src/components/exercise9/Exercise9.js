import React, { useState, useEffect } from 'react'
import "./Exercise9.css"

function UserInfo() {
    const [users, setUsers] = useState([])
    const LoadData = () => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then(res => res.json())
            .then(data => { setUsers(data) });
    }

        useEffect(() => {
            LoadData()
        }, [])

    return (
        
        <dib > 
            <div className='user-button'>
                <button  onClick={LoadData}>Fetch Random</button>
            </div>
            <div className='flip-card'>
                <div className='flip-card-inner' >
                <div className="users-info flip-card-front">
                {users.map(user => <UsersList firstName={user.first_name}
                    id={user.id}
                    avatar={user.avatar}
                    userName={user.username}
                    gender={user.gender}
                >  
                </UsersList> )}
                </div>

                {/* <div className='flip-card-back'>
                        
                            {users.map(user => <h3>{user.phone_number}</h3> )}
                    
                </div> */}
            </div>
            </div>
            
        </dib>
     )
}
function UsersList(props) {
    return (
        <div className='user'>
            <h3>Name: {props.firstName}  </h3>
            <p>Id: {props.id}</p>
            <h5>User Name:  {props.userName}</h5>
            <h5>Gender: { props.gender}</h5>
            <img src={props.avatar} alt="" />
         </div>
     )
 }

export default UserInfo

