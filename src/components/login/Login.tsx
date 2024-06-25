'use client'
import React, { useEffect, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import './login.css';
import Link from 'next/link';
import PasswordToggle from '../utilities/icons/PasswordToggle';
import { loginUser } from '@/api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo, setCurrentUserInfo, setUserInfo } from '@/redux/slices/userSlice';
import { useAppSelector } from '@/redux/hooks/hook';
import { useRouter } from 'next/navigation';
 
import toast, { Toaster } from 'react-hot-toast';
import { selectLoginData, setLoginData, setUserData } from '@/redux/slices/authSlice';



const Login: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const loginData = useAppSelector(selectLoginData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoginData({ password: loginData.password, email: e.target.value }))


  };

  const handleClick = async (e:any) => {
    e.preventDefault()
if(!loginData.email && !loginData.password){
console.log('Credentials missing!')
toast.error('Credentials missing!');
return
}
    let data = await loginUser(loginData)
    if (data?._id) {
      dispatch(setCurrentUserInfo(data))
      toast.success("Logined succesfully")
      dispatch(setLoginData({ email: '', password: '' }))
      router.push('/feed')
      
    }else{
      toast.error(data)
    }
   


  }
  return (
    <div className='auth-box'>
      <h5>Log in</h5>
      <form action="" className="login-form">
        <div className="login-input">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <input
              required
              type="email"
              name="email"
              placeholder='Email'

              onChange={handleChange}
            />
          </div>
        </div>

        <div className="login-input">
          <label htmlFor="password">Password</label>
          <div className='input-icon'>
            <PasswordToggle />
          </div>
        </div>

        <div>
          <button onClick={e => handleClick(e)} className="btn btnFill">Login</button>
         
        </div>

        <hr style={{ color: '#ccc' }} />

        <div className='extra'>
          <p>Don't have an account?</p>
          <Link style={{ color: 'var(--blue)', fontWeight: 600 }} href='/register'>Sign Up</Link>
        </div>
      </form>
      <Toaster />

    </div>
  );
};

export default Login;
