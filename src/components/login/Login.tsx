import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import './login.css'
import Link from 'next/link';
import PasswordToggle from '../utilities/icons/PasswordToggle';


const Login:React.FC = () => {
  return (
    <div className='auth-box' >
<h5>Log in</h5>
<form action="" className="login-form">
   
    <div className="login-input">
        <label htmlFor="email">Email</label>
        <div className="input-icon">
        <input type="email" placeholder='Email' />

        </div>
    </div>

    <div className="login-input">
    <label htmlFor="password">Password</label>
        <div className='input-icon' >
      <PasswordToggle />
        </div>
      
    
    </div>
    <div>
    <button className="btn btnFill">Login</button>
    <button className="btn btnOutline">Forgot Password?</button>
    </div>
    <hr style={{color:'#ccc'}} />

<div className='extra'>
    <p>Don't have an account?</p>
    <Link style={{color:'var(--blue)',fontWeight:600}} href='/signup'>Sign Up</Link>
</div>


</form>
    </div>
  )
}

export default Login