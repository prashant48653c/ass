'use client'
import copy from 'copy-text-to-clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';


 
const Copy = () => {
    const handleCopy=()=>{
        copy('this is copied')
        console.log('copied')
    }
  return (
    <MdOutlineContentCopy onClick={handleCopy}  size={23}/>

  )
}

export default Copy