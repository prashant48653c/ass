import FeedSingle from '@/components/feed/Feed'
import React from 'react'
import './feed.css'
import Sidebar from '@/components/sidebar/sidebar'
import PaginationUI from '@/components/pagination/Pagination'
const Feed:React.FC = () => {
  return (
    <section className='feed-container'>
      <div>
      <FeedSingle/>
<FeedSingle/>
<FeedSingle/>
<FeedSingle/>
<PaginationUI/>
      </div>
      <div>
        <Sidebar/>
      </div>


    </section>
  )
}

export default Feed