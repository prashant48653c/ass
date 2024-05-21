'use client'
import React from 'react'

import './view.css'
import Image from 'next/image'
import Author from '../sidebar/Author'
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineHeart, AiOutlineSound } from 'react-icons/ai'
import { GiSoundOn } from 'react-icons/gi'
import { MdOutlineContentCopy } from 'react-icons/md'
import Copy from '../utilities/icons/Copy'
import Viewcontent from './Viewcontent'
import Link from 'next/link'
 


const View:React.FC = () => {
    const handleSound = (): void => {
        console.log("first");
        const text = "Earth, our precious celestial home, is a masterpiece of cosmic wonders. Nestled in the vastness of space, it teems with life, harboring ecosystems that have evolved over billions of years. From the towering mountains to the depths of the ocean abyss, Earth's diverse landscapes astonish with their beauty and complexity.";
        const utterance  = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance );
    };
    
    
return (
<div className='view-container' >
<div className="view-area">
<div className="heading-detail">
<h3>Sustainable development relives torture to the environment</h3>
<div className="blog-author-detail">
<Image className='view-blog-img' style={{borderRadius:33,marginBottom:15}} width={590} height={300} src={'/blogPic.jpg'} alt='blog image' />
<div className="author-info-blog">
<Image style={{borderRadius:333}} width={50} height={50} src={'/pp.jpg'} alt='blog image' />
<div className='author-sub'>
<h6> 
    <Link href={'/profile'} >Jake Hollow</Link>
    </h6>
<p>1k follower</p>
</div>
</div>
</div>
</div>




<div className="blog-area">
     
 <Viewcontent/>
   
   
</div>
<div className="reaction">
    <AiOutlineHeart size={23}/>
    <div style={{cursor:'pointer'}} onClick={handleSound} >
    <AiOutlineSound size={23}/>

    </div>
    <Copy/>
    <AiOutlineEdit  size={23}/>
    <AiOutlineDelete  size={23}/>




</div>
</div>
</div>
)
}

export default View