import React from 'react'

const SignIn = (props) => {

    return ( 
        <div>
             <form>
                <input id='userameField' type='text' placeholder='Username'></input>
                <input type='button' value="Sign In" onClick={()=>props.handleSignIn(document.getElementById('userameField').value)}></input>
                <input type='button' value="Cancel" onClick={()=>props.handleCancel()}></input>
             </form>
        </div>

    )
}

export default SignIn;