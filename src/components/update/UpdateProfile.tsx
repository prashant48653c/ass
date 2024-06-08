'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import './update.css';
import { updateUser } from '@/api/User';
import { useAppSelector } from '@/redux/hooks/hook';
import { selectUserInfo } from '@/redux/slices/userSlice';

const UpdateProfile: React.FC = () => {
  const userInfo=useAppSelector(selectUserInfo)
  const [formData, setFormData] = useState({
    userId: userInfo._id,   
    username: '',
    desc: '',
  });

  const updateUserData = async () => {
    const { userId, username, desc } = formData;
    console.log(userId)
    try {
      const updatedUser = await updateUser({ id: userId, username, desc });
      console.log('User updated successfully:', updatedUser);
       
    } catch (error) {
      console.error('Error updating user:', error);
       
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateUserData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="update-screen">
      <h3 className="up-title">Your Profile</h3>
      <div className="up-pp-div">
        <Image className="update-pp" width={130} height={130} alt="profile" src="/pp.jpg" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="update-input"
            type="text"
            name="username"
            placeholder="Your name"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="update-input"
            type="text"
            name="desc"
            placeholder="Your Bio"
            value={formData.desc}
            onChange={handleChange}
          />
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'1rem'}} >
          <button className="btn btnFill" type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
