'use client'
import React, { useEffect, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import './login.css';
import Link from 'next/link';
import PasswordToggle from '../utilities/icons/PasswordToggle';
import { loginUser } from '@/api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '@/redux/slices/userSlice';
import { useAppSelector } from '@/redux/hooks/hook';
import { useRouter } from 'next/navigation';


const Login:React.FC = () => {
  const router=useRouter()
  const dispatch=useDispatch()
  const userInfo=useAppSelector((state)=>state.user)
  const [userData, setUserData] = useState({ email: '', password: 'aaaaaa' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));

  };

 const handleClick=async(e:any)=>{
  e.preventDefault()
  let data=await loginUser(userData)
  dispatch(setUserInfo(data))
  router.push('/feed')
 
 }
   return (
    <div className='auth-box'>
      <h5>Log in</h5>
      <form action="" className="login-form">
        <div className="login-input">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <input 
              type="email" 
              name="email"
              placeholder='Email' 
              value={userData.email} 
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
          <button onClick={e=>handleClick(e)} className="btn btnFill">Login</button>
          <div style={{textAlign: 'center', margin: '1rem 0'}}>
            <Link href={'/forgot'} className="btn btnOutline">Forgot Password?</Link>
          </div>
        </div>
        
        <hr style={{color: '#ccc'}} />

        <div className='extra'>
          <p>Don't have an account?</p>
          <Link style={{color: 'var(--blue)', fontWeight: 600}} href='/signup'>Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
