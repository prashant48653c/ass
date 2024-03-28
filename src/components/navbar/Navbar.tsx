import React from 'react'
import Links from './Links'
import { MdAlbum } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='nav' >
<div className="logo">
<MdAlbum size={27} />
<h1>Bloggy</h1>
</div>
<ul className="nav-links">
   <Links/>
</ul>
<div className="nav-btns">
<button className="btnFill btn">Login</button>
<button className="btnOutline btn">Signup</button>

</div>
    </nav>
  )
}

export default Navbar