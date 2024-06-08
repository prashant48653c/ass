'use client'
import Links from './Links'
import { MdAlbum } from "react-icons/md";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectCurrentUserInfo, selectUserInfo, setCurrentUserInfo, setIsOwner, setUserInfo } from '@/redux/slices/userSlice';
import { MdOutlineAccountCircle } from "react-icons/md";
import { checkData } from '@/helper/data';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { logOut } from '@/api/Auth';
import { getRefresh } from '@/api/User';
import { getCookie } from '@/helper/cookie';

const Navbar = () => {
    const currentInfo = useAppSelector(selectCurrentUserInfo);
    const dispatch = useAppDispatch();
    const router = useRouter()
    const userInfo = useAppSelector(selectUserInfo);

    const retrieveData = async () => {
        const data = await checkData();
        console.log(data)
        dispatch(setCurrentUserInfo(data));
    };

    const goToProfile = () => {
        dispatch(setUserInfo(currentInfo))
        console.log(currentInfo, "Userinfo")
        dispatch(setIsOwner(true))
        router.push('profile')

    }
    const handleLogOut = async () => {
        await logOut()
        router.push('/')
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
            <ul className="nav-links-mob">
                <Links />
            </ul>
            <div className="nav-btns">
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
