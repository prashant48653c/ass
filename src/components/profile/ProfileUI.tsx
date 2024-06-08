'use client'
import React, { useEffect, useState } from 'react';
import './profile.css';
import FeedSingle from '../feed/Feed';
import Image from 'next/image';
import PaginationUI from '../pagination/Pagination';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { getAllBlog } from '@/api/Blog';
import { selectBlogInfo, selectQuery, setBlogInfo, setSearchQuery, setSingleBlog } from '@/redux/slices/blogSlice';
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
const currentInfo=useAppSelector(selectCurrentUserInfo)
  const dispatch = useAppDispatch();

  const getUserBlog = async () => {
    try {
      if (!isOwner) {

        const userId = singleBlog.user;
        setQuery({ user: userId, page: searchQuery.page, keyword: '', tags: [''] });

        const blogs = await getAllBlog({ user: userId, page: 1, keyword: '' });
        console.log(blogs, 'blogs fetched for the user');
        dispatch(setBlogInfo({ blogs }))

        console.log(blogInfo, "this is blog from first case")

      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const getAuthorData = async () => {
    try {
      if (!isOwner) {

        const userId = singleBlog.user;

        const user = await getSingleUser(userId);
        dispatch(setUserInfo(user));
      } else {
        console.log(userInfo, "us from here")
        const userId = userInfo._id;
        const user = await getSingleUser(userId);
        dispatch(setUserInfo(user));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getProfileBlog = async () => {
    if (currentInfo._id) {


      
      const data=await checkData()
      const userId = data._id;
      dispatch(setUserInfo(data))
      console.log(searchQuery)
      const blogs = await getAllBlog({ user: userId, page: searchQuery.page, keyword: '' });
      dispatch(setBlogInfo({ blogs }))
      
     
    }
  }

  useEffect(() => {
   
    
    if(isOwner) {
      getProfileBlog()
    
    }else{

      getAuthorData();
      getUserBlog();
    }

  }, [singleBlog, dispatch, isOwner]);

  if (!userInfo || !singleBlog) {
    console.log(userInfo)

  }


  return (
    <div className='profile-container'>
      <div className="blog-profile">
        <h3>All Blogs</h3>
        {blogInfo?.map((blog, i) => (
          <FeedSingle key={i} blog={blog} />
        ))}
        <PaginationUI />
      </div>
      <div className="profile-details">
        <Image className='clip-pp' width={130} height={130} alt='profile' src={'/pp.jpg'} />
        <h5>{userInfo?.username}</h5>
        <p>{userInfo?.desc}</p>
        <button onClick={() => router.push('/change')} className="btn btnFill">Update</button>
      </div>
    </div>
  );
};

export default ProfileUI;
