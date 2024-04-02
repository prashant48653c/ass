import FeedSingle from '@/components/feed/Feed'
import React from 'react'
import './feed.css'
import Sidebar from '@/components/sidebar/sidebar'
import PaginationUI from '@/components/pagination/Pagination'
import Search from '@/components/search/Search'




interface FEEDDATA{
  heading:string,
  desc:string,
  author:{
    name:string,
    pic:string
  },
  blogPic:string,
  tags:string[]
}

const blogPosts: FEEDDATA[] = [
  {
    heading: 'The Future of Artificial Intelligence',
    tags: ['AI', 'Tech'],
    author: {
      name: 'Emily Zhang',
      pic: '',
    },
    desc: 'Artificial Intelligence is advancing rapidly and reshaping various industries...',
    blogPic: '/blogPic.jpg'
  },
  {
    heading: 'Exploring the area of Bitcoin',
    tags: ['Bitcoin', 'AI'],
    author: {
      name: 'David Smith',
      pic: '',
    },
    desc: 'New technologies are constantly emerging, revolutionizing the way we live and work...',
    blogPic: '/blogPic.jpg'
  },
  {
    heading: 'The Impact of AI in Web Dev',
    tags: ['AI', 'React'],
    author: {
      name: 'Jessica Brown',
      pic: '',
    },
    desc: 'Machine Learning algorithms are being applied to healthcare to improve diagnostics...',
    blogPic: 'https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp'
  },
  {
    heading: 'Beauty and Fashion in high value trend',
    tags: ['Beauty', 'Fashion'],
    author: {
      name: 'Michael Johnson',
      pic: '',
    },
    desc: 'As AI becomes more powerful, ethical considerations become increasingly important...',
    blogPic: 'https://img.freepik.com/free-vector/girl-with-make-up-tutorial-youtube-thumbnail_23-2148568459.jpg'
  },
  
];

const Feed: React.FC = () => {
  return (
    <section className='feed-container'>
      <div className='sidebar-box-mob' >
        <Sidebar />
      </div>
      <div className='feed-box1'>
        <Search />
        {
          blogPosts.map((blog,i)=> <FeedSingle blog={blog} key={i} /> )
        }
       
        <PaginationUI />
      </div>
      <div className='sidebar-box-pc' >
        <Sidebar />
      </div>


    </section>
  )
}

export default Feed