import Image from 'next/image'
import React from 'react'
import './update.css'
const UpdateProfile:React.FC = () => {
  return (
    <div className='update-screen' >
<h3 className='up-title' >Your Profile</h3>
<div className='up-pp-div' >
<Image className='update-pp' width={130} height={130} alt='profile' src={'/pp.jpg'} />
 
</div>
<div>
    <input className='update-input' type="text" placeholder='Your name' />
</div>

<div>
    <input className='update-input' type="text" placeholder='Your Bio' />
</div>
<div>
<button className="btn btnFill" >Update</button>

</div>
    </div>
  )
}

export default UpdateProfile