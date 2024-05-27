'use client'
import Links from './Links'


import { MdAlbum } from "react-icons/md";
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks/hook';
import { selectUserInfo } from '@/redux/slices/userSlice';
import { MdOutlineAccountCircle } from "react-icons/md";
const Navbar = () => {

const userInfo = useAppSelector(selectUserInfo)
console.log(userInfo)
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

{
    userInfo._id?
    (
        <>
        <Link className="btnOutline btn" href='/profile' >
<MdOutlineAccountCircle />
            Profile
        
        </Link>
        <button className="btn btnFill">Logout</button>
        </>
    )
    
    :
   ( <>
    <Link className="btnFill btn" href='/login' >Login</Link>
<Link className="btnOutline btn" href='/register' >Register</Link>

    </>)

}






</div>
</nav>
)
}

export default Navbar