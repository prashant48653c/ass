'use client'
import Links from './Links'
import { MdAlbum } from "react-icons/md";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectCurrentUserInfo, selectUserInfo, setCurrentUserInfo, setIsOwner, setUserInfo } from '@/redux/slices/userSlice';
import { MdOutlineAccountCircle } from "react-icons/md";
import { checkData } from '@/helper/data';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMenu } from "react-icons/fi";
import { logOut } from '@/api/Auth';
import { getRefresh } from '@/api/User';
import { getCookie } from '@/helper/cookie';
import { setSearchQuery } from '@/redux/slices/blogSlice';
 

const Navbar = () => {
    const currentInfo = useAppSelector(selectCurrentUserInfo);
    const dispatch = useAppDispatch();
    const router = useRouter()
    const userInfo = useAppSelector(selectUserInfo);
const [show,setShow]=useState<boolean>(false)
    const retrieveData = async () => {
        const data = await checkData();
        console.log(data)
        dispatch(setCurrentUserInfo(data));
    };

    const goToProfile = () => {
        retrieveData()
        dispatch(setIsOwner(true))
        dispatch(setUserInfo(currentInfo))
        
        dispatch(setSearchQuery({user:'', page: 1, tags:[], keyword: '' }));
        console.log(currentInfo, "Userinfo")
        router.push('profile')

    }
    const handleLogOut = async () => {
        await logOut()

        router.push('/')
        window.location.reload();

    }
const handleToggle=()=>{
setShow(!show)
}
    useEffect(() => {
        const aToken = getCookie('accesstoken')
        if (!aToken) {
            getRefresh()
            console.log("Refresh running")

        }
        retrieveData();
    }, [dispatch]);

    useEffect(() => {
        console.log(currentInfo);
    }, [currentInfo]);

    return (
        <nav className='nav'>
            <div className="logo">
                <MdAlbum size={27} />
                <h1>Bloggy</h1>
            </div>
            <ul className="nav-links">
                <Links />
            </ul>
            {
                show &&
                <ul className="nav-links-mob">
                <Links />
                
            </ul>
            }
          
            <div className="nav-btns">
            <FiMenu className='menu-icon' onClick={handleToggle} size={24} />
                {currentInfo ? (
                    <>
                   
                        
                        <button onClick={goToProfile} className="btnFill btn" style={{ alignItems: 'center', display: 'flex', gap: '.3rem' }} >
                        <MdOutlineAccountCircle size={18} />
                        Profile
                    </button>
                  
                     

                        <button onClick={handleLogOut} className="btn btnFill">Logout</button>
                    </>
                ) : (
                    <>
                        <Link className="btnFill btn" href='/login'>Login</Link>
                        <Link className="btnOutline btn" href='/register'>Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
