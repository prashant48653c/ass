import React from 'react'



interface ViewcontentProps {
  desc: string;
}
const Viewcontent: React.FC<ViewcontentProps> = ({ desc }) => {
  return (
    <p>
      
      {desc}

</p>
  )
}

export default Viewcontent