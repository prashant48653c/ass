'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import PasswordToggle from '../utilities/icons/PasswordToggle'
import '../login/login.css'
import { signUp } from '@/api/Auth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook'
import { setUserData } from '@/redux/slices/authSlice'
import { setUserInfo } from '@/redux/slices/userSlice'
import { Router, useRouter } from 'next/router'
import { setCookie } from '@/helper/cookie'
 

const Register: React.FC = () => {

  const dispatch=useAppDispatch()

  const userData = useAppSelector((state) => state.auth.signup)
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUserData({ [name]: value }));
  };
 

  const handleSignup=async(e:any)=>{
    e.preventDefault()

    console.log(userData)
  const data= await signUp(userData)
    const {token,refreshToken}=data
    setCookie("accesstoken",token,172800)
    setCookie("refreshtoken",refreshToken,604800)

 
    
  }

  return (
    <div className='auth-box'>
      <h5>Sign Up</h5>
      <form action="" className="login-form">
        <div className="login-input">
          <label htmlFor="username">Username</label>
          <div className="input-icon">
            <input
              name="username"
              type="text"
              placeholder='Username'
              value={userData.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="login-input">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <input
              name="email"
              type="email"
              placeholder='Email'
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="login-input">
          <label htmlFor="password">Create Password</label>
          <div className='input-icon'>
            <PasswordToggle />
            
          </div>
        </div>

        <div>
          <button onClick={(e)=>handleSignup(e)} className="btn btnFill">Signup</button>
        </div>

        <div className='extra'>
          <p>Already have an account?</p>
          <Link style={{ color: 'var(--blue)', fontWeight: 600 }} href='/login'>Log in</Link>
        </div>
      </form>
    </div>
  )
}

export default Register;
