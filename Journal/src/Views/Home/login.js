import React from 'react'

class Login extends React.Component {
    login() {
        // TODO: Server call to check user and get user data
        let isValidUser = true;
        if( isValidUser ){
            // TODO: Add userName to local storage
            console.log("login success");
            // TODO: Redirect to Home Page
        }
        
    }
    render() {
        return (
            <div>
                <h1>Journal</h1>
                <input></input>
                <button onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}

export default Login