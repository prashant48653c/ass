'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import './feed.css'
import { AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai'
import {getAllBlog, getSingleBlog} from '../../api/Blog'
import blogPic from '../../../public/blogPic.jpg'
import { setSingleBlog } from '@/redux/slices/blogSlice'
import { useAppDispatch } from '@/redux/hooks/hook'
interface FEEDDATAPROP{
    blog:{
        head: "Understanding NestJS",
        desc: "A comprehensive guide to building applications with NestJS.",
        profilePic: "http://example.com/profile-pic.jpg",
        blogImg: "http://example.com/blog-img.jpg",
        authorName: "John Doe",
        tags: ["nestjs", "typescript"],
        _id:'s34rf3'
        user: {}  
    }
  
  }

  
const FeedSingle: React.FC<FEEDDATAPROP> = ({blog}) => {
const dispatch=useAppDispatch()
    const router=useRouter()
    const navigate=async()=>{
        console.log(blog._id)
 let id=blog._id
let data=await getSingleBlog(id)
dispatch(setSingleBlog({ blog: data })); 
 router.push('/view')
    }
   
  
    
return (
<div onClick={navigate} className='feed-single' >
<div>
<Image className='blog-feed-img' style={{ borderRadius: '1rem' }} alt='blog image' width={170} height={120} src={blogPic} />
</div>
<div className="blog-info">
<div className="blog-author">
<Image alt='author image' className='author-img' width={30} height={30} src={'/pp2.png'} />
<Link href={'/profile'}>{blog.authorName}</Link>
<div className="tags">
    {
        blog.tags.map((tag,j)=>{
return <div className="tag" key={j} >{tag}</div>
            
        })
    }

</div>
</div>

<div className="blog-details">
<h5>{blog.head}</h5>
<p>{blog.desc}</p>
</div>
<div className='icons-flex'>
<AiOutlineHeart size={23} />

<AiOutlineUserAdd size={23} />
</div>
</div>
</div>
)
}

export default FeedSingle