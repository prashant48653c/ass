import React from 'react'
import './contact.css'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'next/image';


// re_XZ9H7ybM_Ab2efoCTHcsCK8m69Bp9HBjs  API KEY

const ContactPage:React.FC = () => {
  return (
    <div className='contact'>
      
      <div className="heading">
        <h2>Get in touch 💬</h2>
      </div>
      <div className="flex-area">
      <form action="" className="form">
        <div className="input">
          <FaUser/>
        <input type="text" placeholder='Your name' />

        </div>

        <div className="input">
        <IoMdMail />
        <input type="email" placeholder='Your email' />

        </div>
<textarea   className='textarea' name="messege"   cols={40} rows={10}>
   
</textarea>
<button className='btn btnFill'>Send</button>
      

      </form>
      <div className="form-image">
        <Image width={600} alt='form-image' height={500} src={'/contact.svg'} />
      </div>
      </div>
   
      
       </div>
  )
}

export default ContactPage