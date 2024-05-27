'use client'
import React, { useState } from 'react'
import './profile.css'
import FeedSingle from '../feed/Feed'
import Image from 'next/image'
import PaginationUI from '../pagination/Pagination'
import { useAppSelector } from '@/redux/hooks/hook'
import { getAllBlog } from '@/api/Blog'
import { setBlogInfo } from '@/redux/slices/blogSlice'
const ProfileUI:React.FC = () => {
  const {userInfo}=useAppSelector((state)=>state.user)
  const [query,setQuery]=useState({user:'',page:1,keyword:''})
  console.log(userInfo)
  const getUserBlog=async()=>{
    setQuery({user:userInfo._id,page:1,keyword:''})
   let blogs=await getAllBlog(query)
   setBlogInfo(blogs)
  }

  if(userInfo)
  return (
    <div className='profile-container' >
        <div className="blog-profile">
        <h3>All Blogs</h3>
       
         
        <PaginationUI/>
        </div>
        <div className="profile-details">
            <Image className='clip-pp' width={130} height={130} alt='profile' src={'/pp.jpg'} />
            <h5>{userInfo.username}</h5>
            <p>{userInfo.desc}</p>
             <button className="btn btnFill">Update</button>
        </div>
       

    </div>
  )
}

export default ProfileUI