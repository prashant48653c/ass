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
import { deleteBlog, getSingleBlog } from '@/api/Blog'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook'
import { selectSingleBlog, setUpdatedBlog } from '@/redux/slices/blogSlice'
import { useDispatch } from 'react-redux'
import { selectCurrentUserInfo, selectIsOwner, selectUserInfo, setIsOwner, setUserInfo } from '@/redux/slices/userSlice'
import { useRouter } from 'next/navigation'
import { checkData } from '@/helper/data'





const View: React.FC = () => {
    const [isPause, setIsPause] = useState(true)
    const singleBlog = useAppSelector(state => state.blog.singleBlog);
    const userInfo = useAppSelector(selectUserInfo)
    const currentInfo = useAppSelector(selectCurrentUserInfo)



    const handleSound = (): void => {
        setIsPause(!isPause)
        let text = singleBlog.desc
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);

 
         
       
    }
    const router = useRouter()
    const dispatch = useAppDispatch()
    const handleNavigate = async () => {
        dispatch(setIsOwner(false))
        dispatch(setUserInfo(userInfo))
    }
    const handleDelete = async () => {
        const id = singleBlog._id
        await deleteBlog(id)
        router.push('/profile')
    }
    const handleEdit = async () => {
dispatch(setUpdatedBlog(singleBlog))
router.push('/create')
    }
    const isOwner = useAppSelector(selectIsOwner)
const findOwner=async()=>{
    const data=await checkData()
    let isSame = data._id == singleBlog.user
    if (isSame) {
        dispatch(setIsOwner(true))
        console.log(isOwner)
    } else {
        dispatch(setIsOwner(false))
    }
}
    useEffect(() => {
        findOwner()
     
    }, [])

    if (!singleBlog) {
        return <p>Loading...</p>;
    }


    return (
        <div className='view-container' >
            <div className="view-area">
                <div className="heading-detail">
                    <h3>{singleBlog.head}</h3>
                    <div className="blog-author-detail">

                        <Image className='view-blog-img' style={{ borderRadius: 33, marginBottom: 15 }} width={590} height={300} src={'/blogPic.jpg'} alt='blog image' />
                        <div className="author-info-blog">
                            <Image style={{ borderRadius: 333 }} width={50} height={50} src={'/pp.jpg'} alt='blog image' />
                            <div className='author-sub'>
                                <h6>
                                    <Link onClick={handleNavigate} href={'/profile'} >{userInfo.username}</Link>
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
                    <AiOutlineHeart size={23} />
                    <div style={{ cursor: 'pointer' }} onClick={handleSound} >
                        <AiOutlineSound size={23} />

                    </div>
                    <Copy desc={singleBlog.desc} />
                    {
                        isOwner &&
                        <>
                            <AiOutlineEdit onClick={handleEdit} size={23} />
                            <AiOutlineDelete onClick={handleDelete} size={23} />

                        </>
                    }




                </div>
            </div>
        </div>
    )
}

export default View