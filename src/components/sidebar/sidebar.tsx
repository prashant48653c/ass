import Image from 'next/image'
import React from 'react'
import './sidebar.css'
import Author from './Author'
import Tagbox from './Tagbox'
const Sidebar:React.FC = () => {
  return (
    <div className='sidebar' >
      <Tagbox/>
      <div className='author-box' >
      <h5>Popular authors</h5>


<Author/>
<Author/>
<Author/>
      </div>
      




    </div>
  )
}

export default Sidebar