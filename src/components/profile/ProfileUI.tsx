import React from 'react'
import './profile.css'
import FeedSingle from '../feed/Feed'
import Image from 'next/image'
const ProfileUI:React.FC = () => {
  return (
    <div className='profile-container' >
        <div className="blog-profile">
        <h3>All Blogs</h3>
        <FeedSingle/>
        <FeedSingle/>
        <FeedSingle/>
        </div>
        <div className="profile-details">
            <Image className='clip-pp' width={150} height={150} alt='profile' src={'/pp.jpg'} />
            <h5>Jake Hopper</h5>
            <p>3 blogs</p>
             <button className="btn btnFill">Update</button>
        </div>
       

    </div>
  )
}

export default ProfileUI