'use client'

import PasswordToggle from '@/components/utilities/icons/PasswordToggle'
import Link from 'next/link'
import '../../../components/login/login.css'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'


const Forgot = () => {
  const [otp, setOtp] = useState('')

  const handleChange = (newVal: string) => {
    setOtp(newVal)
  }
  return (
    <section className="auth-container">
 <div className='auth-box' >
      <h5>Forgot Password?</h5>
      <p style={{ padding: '1rem 0', fontSize: '1.2rem' }} >We have sent an OTP code for verification to your registered email.Please insert the OTP code to set new password for your account.</p>
      <form action="" className="login-form">

        <MuiOtpInput value={otp} onChange={handleChange} />

        <div className="login-input">
          <label htmlFor="password" >New Password</label>
          <div className='input-icon' >
            <PasswordToggle />
          </div>


        </div>
        <div>
          <button className="btn btnFill">Change Password</button>

        </div>





      </form>
    </div>
    </section>
   
  )
}

export default Forgot