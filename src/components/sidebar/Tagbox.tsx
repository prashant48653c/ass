'use client'
import React, { useState } from 'react'
import './sidebar.css'
import { selectQuery, setSearchQuery } from '@/redux/slices/blogSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook'

const Tagbox: React.FC = () => {
  const tags = [
    { tag: 'Tech' },
    { tag: 'Beauty' },
    { tag: 'Web' },
    { tag: 'Ai' },
    { tag: 'Money' },
    { tag: 'Bitcoin' },
    { tag: 'Bun' },
    { tag: 'React' },
  ]

  const searchQuery = useAppSelector(selectQuery)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const dispatch = useAppDispatch()

  const handleClick = (e: any) => {
    const tag = e.target.textContent

    
    if (selectedTags.includes(tag)) {
      
      const updatedTags = selectedTags.filter(t => t !== tag)
      setSelectedTags(updatedTags)
      dispatch(setSearchQuery({ ...searchQuery, tags: updatedTags }))
    } else {
     
      const updatedTags = [...selectedTags, tag]
      setSelectedTags(updatedTags)
      dispatch(setSearchQuery({ ...searchQuery, tags: updatedTags }))
    }
  }

  return (
    <div className='tag-container'>
      <h5>Trending tags</h5>
      <div className='tagbox'>
        {
          tags.map((tag, i) => (
            <div
              key={i}
              onClick={(e) => handleClick(e)}
              className={`tag ${selectedTags.includes(tag.tag) ? 'selected' : ''}`}
            >
              {tag.tag}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tagbox
