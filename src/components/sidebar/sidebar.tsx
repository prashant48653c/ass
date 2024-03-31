import Image from 'next/image'
import React from 'react'
import './sidebar.css'
import Author from './Author'
import Tagbox from './Tagbox'
const Sidebar:React.FC = () => {
  return (
    <div className='sidebar' >
      <Tagbox/>
        <h5>Popular authors</h5>


      <Author/>
      <Author/>
      <Author/>




    </div>
  )
}

export default Sidebar