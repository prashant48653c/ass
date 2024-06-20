'use client'
import { AiOutlineSearch } from 'react-icons/ai'

import './search.css'
import { BiSort } from 'react-icons/bi';
import { useAppSelector } from '@/redux/hooks/hook';
import { selectQuery, setSearchQuery } from '@/redux/slices/blogSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const Search: React.FC = () => {
  const searchQuery = useAppSelector(selectQuery)
  const [key, setKey] = useState('')
  const dispatch = useDispatch()
  const handleKey = async (e: any) => {
    console.log(e.nativeEvent.data)
    setKey(e.target.value)
    dispatch(setSearchQuery({ keyword: key, tags: searchQuery.tags, page: searchQuery.page,user:'' }))
    if (e.key == 'Enter') {
      console.log('Enter is clicked')

    }
  }
  return (
    <div className="search-container">
      <div className='search-bar'>
        <AiOutlineSearch size={24} />
        <input onChange={(e) => handleKey(e)} type="text" placeholder='Search blog' />
         
      </div>

    </div>

  )
}

export default Search