'use client'
import { useRef, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'

const PasswordToggle:React.FC = () => {
    const passRef=useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false)
    const getPassword=()=>{
        console.log("first")
        setVisible(!visible)
        let pass=passRef.current;
        console.log(pass)
        
    }
  return (
    <>
      <input ref={passRef} type="password" placeholder='Password' />
        <IoEyeOutline onClick={getPassword} size={22} />

    </>
  )
}

export default PasswordToggle