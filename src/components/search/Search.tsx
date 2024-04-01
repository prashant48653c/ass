import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaFilter } from "react-icons/fa";
 import './search.css'

 
const Search:React.FC = () => {
  return (
    <div className="search-container">
 <div className='search-bar'>
        <AiOutlineSearch size={24} />
        <input type="text" placeholder='Search blog' />

    </div>
   
    </div>
   
  )
}

export default Search