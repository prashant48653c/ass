'use client';

import React, { useEffect } from 'react';
import './feed.css'
 
import PaginationUI from '@/components/pagination/Pagination';
import Search from '@/components/search/Search';
import { getAllBlog } from '@/api/Blog';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectBlogInfo, selectQuery, selectSingleBlog, selectTotal, selectUpdatedBlog, setBlogInfo, setSearchQuery, setSingleBlog, setTotal, setUpdatedBlog } from '@/redux/slices/blogSlice';
import Sidebar from '@/components/sidebar/sidebar';
import FeedSingle from '@/components/feed/Feed';
import { selectCurrentUserInfo, setIsOwner } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

const Feed: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const blogInfo = useAppSelector(selectBlogInfo);
  const searchQuery = useAppSelector(selectQuery)
  const singleblog = useAppSelector(selectSingleBlog)
  const updatedBlog = useAppSelector(selectUpdatedBlog)
  const currentUser = useAppSelector(selectCurrentUserInfo)
  const total = useAppSelector(selectTotal)
  console.log(total)
  const getBlog = async () => {
    let data = await getAllBlog(searchQuery);
    dispatch(setBlogInfo({ blogs: data.blogs }));
    let num = data.total
    dispatch(setTotal({ totals: num }));
  };
  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    }
  }, [])


  useEffect(() => {
    getBlog();
    dispatch(setUpdatedBlog({ blog: null }))


  }, [searchQuery]);
   
  console.log(updatedBlog, "updated")
  return (
    <section className='feed-container'>
      <div className='sidebar-box-mob'>
        <Sidebar />
      </div>
      <div className='feed-box1'>
        <Search />
        {blogInfo && blogInfo.length > 0 ? (
          blogInfo.map((blog: any, i: number) => (
            <FeedSingle blog={blog} key={i} />
          ))
        ) : (
          <p>No Blog Available</p>
        )}
        <PaginationUI />
      </div>
      <div className='sidebar-box-pc'>
        <Sidebar />
      </div>
    </section>
  );
};

export default Feed;
