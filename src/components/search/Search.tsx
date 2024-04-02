import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

 import './search.css'
import { BiSort } from 'react-icons/bi';

 
const Search:React.FC = () => {
  return (
    <div className="search-container">
 <div className='search-bar'>
        <AiOutlineSearch size={24} />
        <input type="text" placeholder='Search blog' />
<BiSort size={24} />
    </div>
   
    </div>
   
  )
}

export default Search