import FeedSingle from '@/components/feed/Feed'
import React from 'react'
import './feed.css'
const Feed:React.FC = () => {
  return (
    <section className='feed-container'>
<FeedSingle/>
<FeedSingle/>
<FeedSingle/>
<FeedSingle/>

    </section>
  )
}

export default Feed