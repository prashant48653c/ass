'use client'
import { useRef, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const PasswordToggle:React.FC = () => {
   
    const [visible, setVisible] = useState(false)
    const [type, setType] = useState('password')

    const getPassword=()=>{
      setVisible(!visible)
      if(visible){
       setType('text')
      }else{
        setType('password')
      }
        console.log("Visibility changed")
     
    }
  return (
    <>
      <input  type={type} placeholder='Password' />
      {
        visible ?
        <IoEyeOffOutline onClick={getPassword} size={22} />
:
<IoEyeOutline onClick={getPassword} size={22} />

      }


    </>
  )
}

export default PasswordToggle