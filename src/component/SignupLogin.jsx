import React from 'react'
import { useState } from 'react'
import '../component/SignupLogin.css'


   import user_icon from "../Assets/person.png"
   import email_icon from "../Assets/email.png"
   import password_icon from "../Assets/password.png"

const SignupLogin = () =>{
    const [action, setAction] = useState('Sign Up')
   
    
    return(
        <div className="container">
            <div className="header">
                <h1>{action}</h1>
                <div></div>
            </div>
            <div className="inputs">
                {action=== "Login"?<div></div>:
                    <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
                
                }
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action=== "Sign Up"?<div></div>: <div className="forgot-password">Forgot password? <span>Click here</span></div>}
            <div className="submit-container">
                <button className={action==="Login"?'submit gray':'submit'} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                <button className={action==="Sign Up" ?"submit gray": "submit"} onClick={()=>{setAction('Login')}} type="button">Login</button>
            </div>
        </div>
    )
}

export default SignupLogin;