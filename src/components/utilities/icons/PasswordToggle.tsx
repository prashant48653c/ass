'use client'
import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook'
import { selectLoginData, setLoginData, setUserData } from '@/redux/slices/authSlice'
import { useSelector } from 'react-redux'



const PasswordToggle: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [type, setType] = useState('password')
  
  const dispatch = useAppDispatch()
const loginData=useAppSelector(selectLoginData)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserData({ password: e.target.value}))
    dispatch(setLoginData({password:e.target.value,email:loginData.email}))
  }

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible)
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <>
      <input
        onChange={handleChange}
        type={type}
        placeholder='Password'
        required
      />
      {
        visible ?
        <IoEyeOffOutline onClick={toggleVisibility} size={22} />
        :
        <IoEyeOutline onClick={toggleVisibility} size={22} />
      }
    </>
  )
}

export default PasswordToggle
