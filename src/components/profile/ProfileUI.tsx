'use client'
import React, { useEffect, useRef, useState } from 'react';
import './profile.css';
import FeedSingle from '../feed/Feed';
import Image from 'next/image';
import PaginationUI from '../pagination/Pagination';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { getAllBlog } from '@/api/Blog';
import { selectBlogInfo, selectQuery, setBlogInfo, setSearchQuery, setSingleBlog, setTotal } from '@/redux/slices/blogSlice';
import { useRouter } from 'next/navigation';
import { getSingleUser } from '@/api/User';
import { selectCurrentUserInfo, selectIsOwner, selectUserInfo, setUserInfo } from '@/redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { checkData } from '@/helper/data';

const ProfileUI: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState({ user: '', page: 1, keyword: '', tags: [''] });

  const singleBlog = useAppSelector(state => state.blog.singleBlog);
  const blogInfo = useAppSelector(selectBlogInfo);
  const userInfo = useAppSelector(selectUserInfo);
  const searchQuery = useAppSelector(selectQuery);
  const isOwner = useAppSelector(selectIsOwner)
  const currentInfo = useAppSelector(selectCurrentUserInfo)
  const dispatch = useAppDispatch();
const [swap,setSwap]=useState(false)
 

  const getAuthorData = async () => {
    try {
      if (!isOwner) {

        const userId = singleBlog.user;

        const user = await getSingleUser(userId);
        dispatch(setUserInfo(user));
      } else {
    
        dispatch(setUserInfo(currentInfo));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getProfileBlog = async () => {
    if (isOwner) {
       
      const data = await checkData()
      const userId = data._id;
      dispatch(setUserInfo(data))
     
      const blogs = await getAllBlog({ user: userId, page: searchQuery.page, keyword: '' });
      dispatch(setBlogInfo({ blogs: blogs.blogs }))
      dispatch(setTotal({ totals: blogs.total }));
      console.log(blogs)
    }else{
      const userId = singleBlog.user;
      console.log(userId,"Id of other",searchQuery.page)
      const blogs = await getAllBlog({ user: userId, page: searchQuery.page, keyword: '' })
      console.log(blogs, 'blogs of Other');
      dispatch(setBlogInfo({ blogs: blogs.blogs }))
      dispatch(setTotal({ totals: blogs.total }));
       

    }
  }

 
  useEffect(() => {
    console.log(isOwner)
    getAuthorData()
    getProfileBlog()
   

  }, [singleBlog, isOwner,searchQuery]);

  useEffect(()=>{
    const width = window.innerWidth;
    if(width < 800){
      setSwap(true)
    }else{
      setSwap(false)
    }
  })  

  if (!userInfo || !singleBlog) {
    console.log(userInfo)

  }
  


  return (
    <div style={{ flexDirection:swap ? 'column' : 'row'}} className='profile-container'>
      <div style={{ order:swap ? 2 : 1}} className="blog-profile">
        <h3>All Blogs</h3>
        {blogInfo?.map((blog, i) => (
          <FeedSingle key={i} blog={blog} />
        ))}
        <PaginationUI />
      </div>
      <div style={{ order:swap ? 1 : 2}} className="profile-details">
        <Image className='clip-pp' width={130} height={130} alt='profile' src={userInfo?.profilePic} />
        <h5>{userInfo?.username}</h5>
        <p>{userInfo?.desc}</p>
        {
          isOwner &&
        <button onClick={() => router.push('/change')} className="btn btnFill">Update</button>
        }
      </div>
    </div>
  );
};

export default ProfileUI;
