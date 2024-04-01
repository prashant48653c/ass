import FeedSingle from '@/components/feed/Feed'
import React from 'react'
import './feed.css'
import Sidebar from '@/components/sidebar/sidebar'
import PaginationUI from '@/components/pagination/Pagination'
import Search from '@/components/search/Search'
const Feed:React.FC = () => {
  return (
    <section className='feed-container'>
        <div className='sidebar-box-mob' >
        <Sidebar/>
      </div>
      <div className='feed-box1'>
        <Search/>
      <FeedSingle/>
<FeedSingle/>
<FeedSingle/>
<FeedSingle/>
<PaginationUI/>
      </div>
      <div className='sidebar-box-pc' >
        <Sidebar/>
      </div>


    </section>
  )
}

export default Feed