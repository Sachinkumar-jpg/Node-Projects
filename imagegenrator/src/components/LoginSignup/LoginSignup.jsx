import React, { useState } from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <input type="email" placeholder='Email id'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign up"?<div></div>:<div className="forgot-password"> Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
            <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
       
    </div>
  )
}
