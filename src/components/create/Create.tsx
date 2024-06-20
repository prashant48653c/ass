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
import { selectUpdatedBlog, setUpdatedBlog } from '@/redux/slices/blogSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { checkData } from '@/helper/data';

const Create = () => {
const [value, setValue] = useState<string>('');
const updatedBlog = useAppSelector(selectUpdatedBlog)
const [title, setTitle] = useState<string>("");
const [selectedTags, setSelectedTags] = useState<string[]>([])
const userInfo = useAppSelector(selectCurrentUserInfo)
const router=useRouter()

 
useEffect(() => {
   if (!userInfo) {
     router.push('/login')
   }
 }, [])

const handleUpload = async (e: any) => {
 
e.preventDefault();
 if(selectedTags.length < 1){
    toast.error("😊 Select atleast one tag!")
    return
 }
const authorName = userInfo.username
 console.log(updatedBlog,"updated")
if(updatedBlog?._id){
const id=updatedBlog._id

await updateBlog({title,desc:value,selectedTags,authorName,id})
toast.success("Updated Successfully")
}else{
   const result:any= await uploadBlog({ title, desc: value, selectedTags, authorName });
   if(result._id){
    toast.success("Uploaded succesfully")
  
   }else{
    toast.error("Guess you missed something!")
   }
    

}
router.push("/feed")
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
<Toaster/>
</div>
);
}

export default Create;
