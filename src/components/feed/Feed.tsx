'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './feed.css'
import { AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai'


interface FEEDDATAPROP{
    blog:{
        heading:string,
        desc:string,
        author:{
          name:string,
          pic:string
        },
        blogPic:string,
        tags:string[]
    }
  
  }

  
const FeedSingle: React.FC<FEEDDATAPROP> = ({blog}) => {

    const router=useRouter()
    const navigate=()=>{
        router.push('/view')
    }
   
    
return (
<div onClick={navigate} className='feed-single' >
<div>
<Image className='blog-feed-img' style={{ borderRadius: '1rem' }} alt='blog image' width={170} height={120} src={blog.blogPic} />
</div>
<div className="blog-info">
<div className="blog-author">
<Image alt='author image' className='author-img' width={30} height={30} src={'/pp2.png'} />
<Link href={'/profile'}>{blog.author.name}</Link>
<div className="tags">
    {
        blog.tags.map((tag,j)=>{
return <div className="tag" key={j} >{tag}</div>
            
        })
    }

</div>
</div>

<div className="blog-details">
<h5>{blog.heading}</h5>
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