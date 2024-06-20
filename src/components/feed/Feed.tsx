'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './feed.css'
import { AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai'
import { getAllBlog, getSingleBlog } from '../../api/Blog'
import blogPic from '../../../public/blogPic.jpg'
import { setSingleBlog, setUpdatedBlog } from '@/redux/slices/blogSlice'
import { useAppDispatch } from '@/redux/hooks/hook'
import { getSingleUser } from '@/api/User'
import { setUserInfo } from '@/redux/slices/userSlice'

interface FEEDDATAPROP {
blog: {
head: string
desc: string
profilePic: string
blogImg: string
authorName: string
tags: string[]
_id: string
user: {}
}

}


const FeedSingle: React.FC<FEEDDATAPROP> = ({ blog }) => {
const dispatch = useAppDispatch()
const router = useRouter()
const navigate = async () => {
console.log(blog._id)
let id = blog._id
let userId=blog.user

let data = await getSingleBlog(id)
let user = await getSingleUser(userId)




dispatch(setSingleBlog({ blog: data }));
dispatch(setUserInfo(user));

router.push('/view')
}

const [screenWidth, setScreenWidth] = useState(window.innerWidth);
useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);

    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

return (
<div onClick={navigate} className='feed-single' >
 <div style={{display:'flex',justifyContent:'flex-start', flex:1,gap:'2rem',flexDirection:screenWidth<500?'column':'row'}} >
    
 <div>
<Image className='blog-feed-img' style={{ borderRadius: '1rem' }} alt='blog image' width={170} height={120} src={blogPic} />
</div>
<div className="blog-info">
<div className="blog-author">
<Image alt='author image' className='author-img' width={30} height={30} src={'/pp2.png'} />
 
<div className="tags">
{
blog.tags.map((tag, j) => {
return <div className="tag" key={j} >{tag}</div>

})
}

</div>
</div>

<div className="blog-details">
<h5>{blog.head}</h5>
{/* <p>{blog.desc}</p> */}
</div>
<div className='icons-flex'>
<AiOutlineHeart size={23} />

<AiOutlineUserAdd size={23} />
</div>
</div>
    </div>   


</div>
)
}

export default FeedSingle