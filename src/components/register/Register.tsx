import Link from 'next/link'
import React from 'react'
import PasswordToggle from '../utilities/icons/PasswordToggle'

const Register:React.FC = () => {
  return (
    <div className='auth-box' >
    <h5>Sign Up</h5>
    <form action="" className="login-form">
       
    <div className="login-input">
            <label htmlFor="email">Username</label>
            <div className="input-icon">
            <input type="text" placeholder='Username' />
    
            </div>
        </div>

        <div className="login-input">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
            <input type="email" placeholder='Email' />
    
            </div>
        </div>
    
        <div className="login-input">
        <label htmlFor="password">Create Password</label>
            <div className='input-icon' >
          <PasswordToggle />
            </div>
          
        
        </div>
        <div>
        <button className="btn btnFill">Signup</button>
         
        </div>
         
    
    <div className='extra'>
        <p>Already have an account?</p>
        <Link style={{color:'var(--blue)',fontWeight:600}} href='/login'>Log in</Link>
    </div>
    
    
    </form>
        </div>
  )
}

export default Register