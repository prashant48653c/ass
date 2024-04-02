import React from 'react'
import Links from './Links'
import { MdAlbum } from "react-icons/md";
import Link from 'next/link';

const Navbar = () => {

return (

<nav className='nav' >
<div className="logo">
<MdAlbum size={27} />
<h1>Bloggy</h1>
</div>
<ul className="nav-links">
<Links />
</ul>

<ul className="nav-links-mob">
<Links />
</ul>

<div className="nav-btns">

<Link className="btnFill btn" href='/login' >Login</Link>


<Link className="btnOutline btn" href='/register' >Register</Link>



</div>
</nav>
)
}

export default Navbar