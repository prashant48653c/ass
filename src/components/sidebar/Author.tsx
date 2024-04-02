import Image from 'next/image'
import React from 'react'
import './sidebar.css'

interface AUTHORPROP{
  author:{
    authorName:string
  }
}
const Author:React.FC<AUTHORPROP> = ({author}) => {
  return (
    <>
  <div className="sidebar-author">
         <Image style={{borderRadius:555}} width={60} height={60} alt='author' src={'/pp.jpg'} />   
         <div className='popular-detail'>
         <h4>{author.authorName}</h4>
    <p>Blogger from nepal and good person with various working expertise...</p>
         </div>
         <button className="btn btnFill">Follow</button>

        </div>
    </>
  )
}

export default Author