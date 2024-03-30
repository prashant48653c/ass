import Image from 'next/image'
import React from 'react'

const Sidebar:React.FC = () => {
  return (
    <div>
        <h5>Popular authors</h5>
        <div className="sidebar-author">
         <Image width={30} height={30} alt='author' src={'/bghome.avif'} />   
         <div>
         <h4>Jake Hopper</h4>
    <em>Blogger from nepal and good person with various working expertise...</em>
         </div>
         <button className="btn btnOutline">Follow</button>

        </div>
    </div>
  )
}

export default Sidebar