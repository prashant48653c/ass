'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './feed.css'
import { AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai'

const FeedSingle: React.FC = () => {

    const router=useRouter()
    const navigate=()=>{
        router.push('/view')
    }
return (
<div onClick={navigate} className='feed-single' >
<div>
<Image style={{ borderRadius: '1rem' }} alt='blog image' width={170} height={120} src={'/blogPic.jpg'} />
</div>
<div className="blog-info">
<div className="blog-author">
<Image alt='author image' className='author-img' width={30} height={30} src={'/pp2.png'} />
<Link href={'/profile'}>Prashant Acharya</Link>
<div className="tags">
<div className="tag">Tech</div>
<div className="tag">AI</div>

</div>
</div>

<div className="blog-details">
<h5>Secret of Living in Earth</h5>
<p>The developemnt of standard industry is improving the average quality of life of a normal person...</p>
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