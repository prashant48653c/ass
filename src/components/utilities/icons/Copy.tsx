'use client'
import copy from 'copy-text-to-clipboard';
import { MdOutlineContentCopy } from 'react-icons/md';


 

interface CopyProp {
  desc: string;
}
const Copy: React.FC<CopyProp> = ({ desc }) => {
    const handleCopy=()=>{
      
        copy(desc)
        console.log('copied')
    }
  return (
    <MdOutlineContentCopy onClick={handleCopy}  size={23}/>

  )
}

export default Copy