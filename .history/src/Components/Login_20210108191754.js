import React from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
function Login() {
    return (
        <div className='login'>
            <Link to='/'>
              <img src="
https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__lo"/>  
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                <h1>E-mail</h1>
                <input type="text"/>
                <h1>Password</h1>
                <input type="text"/>
                </form>
            </div>
        </div>
    )
}

export default Login