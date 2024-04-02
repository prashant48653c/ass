import React from 'react'
import './footer.css'
import { FaFacebookF,FaLinkedin,FaInstagram } from "react-icons/fa";
import { AiOutlineAim, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";


const Footer:React.FC = () => {
  return (
    <div className='footer' >
 <div className="footer-card">
  <h5>Links</h5>
  <ul className='footerLinks'>
    <li><a className='arrow-link' href=""><MdArrowOutward />Home </a></li>
    <li><a className='arrow-link' href=""><MdArrowOutward />Blogs</a></li>
    <li><a className='arrow-link' href=""><MdArrowOutward />Get Started</a></li>
    <li><a className='arrow-link' href=""><MdArrowOutward />Contact</a></li>

  </ul>
 
 </div>

 <div className="footer-card">
  <h5>Updates</h5>
  <ul className='footerLinks' >
    <li><a className='arrow-link' href=""><MdArrowOutward />About</a></li>
    <li><a className='arrow-link' href=""><MdArrowOutward />News</a></li>
    <li><a className='arrow-link' href=""><MdArrowOutward />Terms and Conditions</a></li>
    <li><a className='arrow-link' href=""><MdArrowOutward />Feedbacks</a></li>

  </ul>
 
 </div>

 <div className="footer-card">
  <h5>Contacts</h5>
  <ul className='footerLinks' >
    <li><a className='arrow-link' href=""><AiOutlineMail />Email</a></li>
    <li><a className='arrow-link' href=""><AiOutlinePhone />071-458360</a></li>
    <li><a className='arrow-link' href=""><AiOutlineAim  />Butwal-Rupandehi</a></li>
    

  </ul>
 
 </div>

 <div className="copyright">
  <div className="social">
<FaFacebookF size={27} />
<FaLinkedin size={27}/>
<FaInstagram size={27}/>

  </div>
  <div>
    <p> © Copyright 2024 Bloggy All Right Researved</p>
  </div>
 </div>


    </div>
  )
}

export default Footer