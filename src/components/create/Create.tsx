'use client'
import  { useState } from 'react'
import './create.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiOutlineUpload } from 'react-icons/ai';
const Create = () => {
   const [value, setValue] = useState('');

  return (
    <>
        <input type="text" placeholder='Title' className='input-head' />
        <ReactQuill placeholder='Your blog....' theme="snow" className='notepad' value={value} onChange={setValue} />
        <button className="btn btnFill btn-upload">Upload 
        <AiOutlineUpload size={18} />
        </button>
    </>
  )
}

export default Create