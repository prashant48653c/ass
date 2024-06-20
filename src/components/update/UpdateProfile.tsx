'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import './update.css';
import { updatePP, updateUser } from '@/api/User';
import { useAppSelector } from '@/redux/hooks/hook';
import { selectUserInfo } from '@/redux/slices/userSlice';
import toast from 'react-hot-toast';

const UpdateProfile: React.FC = () => {
  const userInfo = useAppSelector(selectUserInfo);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    userId: userInfo._id,
    username: '',
    desc: '',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      console.log(event.target.files[0]);
    } 
  };

  const handleFileUpload = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (selectedFile) {
      const _id = userInfo._id;
      await updatePP(selectedFile, _id);
      
    } else {
      console.error('No file selected');
    }
  };

  const updateUserData = async () => {
    const { userId, username, desc } = formData;
    console.log(userId);
    try {
      const updatedUser = await updateUser({ id: userId, username, desc });
      console.log('User updated successfully:', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleSubmit =async (event: React.FormEvent) => {
    event.preventDefault();
   await updateUserData();
   toast.success("Profile Picture Updated")
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="update-screen">
      <h3 className="up-title">Your Profile</h3>

      <div className="up-pp-div">
        <Image className="update-pp" width={130} height={130} alt="profile" src={userInfo.profilePic} />
        <input onChange={handleFileChange} className='file' type="file" name="profile" />
        <button className='btnFill btn btn-pp' onClick={handleFileUpload}>Update Picture</button>
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button className="btn btnFill" type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
