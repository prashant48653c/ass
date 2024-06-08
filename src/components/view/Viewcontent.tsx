import React from 'react'



interface ViewcontentProps {
  desc: string;
}
const Viewcontent: React.FC<ViewcontentProps> = ({ desc }) => {
  return (
    
    <pre className='pre'>
    
    <code dangerouslySetInnerHTML={{__html:desc}} />
    
  </pre>
 
  )
}

export default Viewcontent