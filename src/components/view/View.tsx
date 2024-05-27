    'use client'
    import React, { useEffect, useState } from 'react'

    import './view.css'
    import Image from 'next/image'
    import Author from '../sidebar/Author'
    import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineHeart, AiOutlineSound } from 'react-icons/ai'
    import { GiSoundOn } from 'react-icons/gi'
    import { MdOutlineContentCopy } from 'react-icons/md'
    import Copy from '../utilities/icons/Copy'
    import Viewcontent from './Viewcontent'
    import Link from 'next/link'
    import { getSingleBlog } from '@/api/Blog'
    import { useAppSelector } from '@/redux/hooks/hook'
    import { selectSingleBlog } from '@/redux/slices/blogSlice'
    
    


    const View:React.FC = () => {
        const [isPause,setIsPause]=useState(true)
        const singleBlog = useAppSelector(state=>state.blog.singleBlog);

        console.log(singleBlog)
        const handleSound = (): void => {
    setIsPause(!isPause)
    let text=singleBlog.desc
    const utterance  = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance); 
        }

    
        if (!singleBlog) {
            return <p>Loading...</p>;
          }
    
       
    return (
    <div className='view-container' >
    <div className="view-area">
    <div className="heading-detail">
    <h3>{singleBlog.head}</h3>
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
        
    <Viewcontent desc={singleBlog.desc} />
    
    
    </div>
    <div className="reaction">
        <AiOutlineHeart size={23}/>
        <div style={{cursor:'pointer'}} onClick={handleSound} >
        <AiOutlineSound size={23}/>

        </div>
        <Copy desc={singleBlog.desc} />
        <AiOutlineEdit  size={23}/>
        <AiOutlineDelete  size={23}/>




    </div>
    </div>
    </div>
    )
    }

    export default View