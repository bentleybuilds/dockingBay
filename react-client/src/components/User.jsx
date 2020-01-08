import React from 'react'
import UserLists from './UserLists.jsx'

const User = (props) => (
    <div>
        <span>
            <p>Welcome {props.userName}</p> 
            <button onClick={()=>props.handleSignOutClick()}>Sign Out</button>
        </span>
        <div>
            {/* <UserLists /> */}
        </div>
    </div>
)

export default User;