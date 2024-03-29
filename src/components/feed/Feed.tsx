import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './feed.css'
import { AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai'

const FeedSingle:React.FC = () => {
  return (
    <div className='feed-single' >
<div>
    <Image style={{borderRadius:'1rem'}} alt='blog image' width={150} height={100} src={'/bghome.avif'} />
</div>
<div className="blog-info">
    <div className="blog-author">
    <Image alt='author image' className='author-img' width={30} height={30} src={'/bghome.avif'} />
        <Link href={'/author'}>Prashant Acharya</Link>
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
        <AiOutlineHeart size={23}/>

        <AiOutlineUserAdd size={23}/>
    </div>
</div>
    </div>
  )
}

export default FeedSingle