'use client'

import { useState } from 'react';
import './create.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiOutlineUpload } from 'react-icons/ai';
import { uploadBlog } from '@/api/Blog';

const Create = () => {
   const [value, setValue] = useState('');
   const [title, setTitle] = useState('');

   const handleUpload = async (e:any) => {
      e.preventDefault();
      console.log('first handleupload');
      await uploadBlog({ title, desc: value });  
   }

   return (
      <div className='note-container'>
         <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className='input-head' />
         <ReactQuill placeholder='Your blog....' theme="snow" className='notepad' value={value} onChange={setValue} />  
         <button onClick={handleUpload} className="btn btnFill btn-upload">Upload 
            <AiOutlineUpload size={18} />
         </button>
      </div>
   );
}

export default Create;
