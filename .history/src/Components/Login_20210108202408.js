import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"

function Login() {
const history = useHistory();
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

    const login = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in , redirect to home page
            history.push('/');
        })
        .catch(e=>alert(e.message))
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            //created a user and logged in, redirect to home page.
        })
        .catch(e=>alert(e.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
              <img src="
https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__lo"/>  
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                <h5>E-mail</h5>
                <input value={email} onChange = {e => setEmail(e.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange = {e => setPassword(e.target.value)} type="password"/>
                <button onClick = {login} type="submit" className="login__signInButton">Sign In</button>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice ans our interest-Based
                    Ads Notice. 
                </p>
                <button onClick = {register} className="login__registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login