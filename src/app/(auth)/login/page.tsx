import Login from '@/components/login/Login'
import React from 'react'
import './auth.css'
const AuthPage:React.FC = () => {
  return (
    <div className='auth-container' >
     <Login/>
    </div>
  )
}

export default AuthPage