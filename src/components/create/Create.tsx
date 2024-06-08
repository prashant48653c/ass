'use client'

import { useEffect, useState } from 'react';
import './create.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiOutlineUpload } from 'react-icons/ai';
import { updateBlog, uploadBlog } from '@/api/Blog';
import Tagbox from '../sidebar/Tagbox';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectCurrentUserInfo, selectUserInfo } from '@/redux/slices/userSlice';
import { selectUpdatedBlog } from '@/redux/slices/blogSlice';

const Create = () => {
const [value, setValue] = useState('');
const updatedBlog = useAppSelector(selectUpdatedBlog)
const [title, setTitle] = useState("");
const [selectedTags, setSelectedTags] = useState<string[]>([])
const userInfo = useAppSelector(selectCurrentUserInfo)


 


const handleUpload = async (e: any) => {
e.preventDefault();
 
const authorName = userInfo.username
if(updatedBlog && updatedBlog.blog){
    const id=updatedBlog._id
await updateBlog({title,desc:value,selectedTags,authorName,id})
}else{
    await uploadBlog({ title, desc: value, selectedTags, authorName });

}

}
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
const dispatch = useAppDispatch()

const handleClick = (e: any) => {

const tag = e.target.textContent
if (selectedTags.includes(tag)) {

const updatedTags = selectedTags.filter(t => t !== tag)
setSelectedTags(updatedTags)

} else {

const updatedTags = [...selectedTags, tag]
setSelectedTags(updatedTags)

}
}

useEffect(()=>{
if(updatedBlog){
    setValue(updatedBlog.desc)
    setTitle(updatedBlog.head)
}
},[])

return (
<div className='note-container'>
<div className='tag-container'>
<h5>Select a tag</h5>
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

<input onChange={(e) => setTitle(e.target.value)} value={ title} type="text" placeholder='Title' className='input-head' />

<ReactQuill value={value} placeholder='Your blog....' theme="snow" className='notepad'   onChange={setValue} />


<button onClick={handleUpload} className="btn btnFill btn-upload">Upload
<AiOutlineUpload size={18} />
</button>
</div>
);
}

export default Create;
