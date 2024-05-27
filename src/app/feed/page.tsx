'use client';
import React, { useEffect } from 'react';
 
import PaginationUI from '@/components/pagination/Pagination';
import Search from '@/components/search/Search';
import { getAllBlog } from '@/api/Blog';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectBlogInfo, selectQuery, setBlogInfo } from '@/redux/slices/blogSlice';
import Sidebar from '@/components/sidebar/sidebar';
import FeedSingle from '@/components/feed/Feed';

const Feed: React.FC = () => {
  const dispatch = useAppDispatch();
  const blogInfo = useAppSelector(selectBlogInfo);
const searchQuery=useAppSelector(selectQuery)
  const getBlog = async () => {
    let data = await getAllBlog(searchQuery);
    dispatch(setBlogInfo({ blogs: data })); 
  };

  useEffect(() => {
    getBlog();
  }, [searchQuery]);  

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
          <p>No result</p>
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
