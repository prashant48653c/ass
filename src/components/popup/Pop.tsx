'use client'
 
import { POPUPPROP } from '@/helper/types';
import toast, { Toaster } from 'react-hot-toast';



export const PopUp:React.FC<POPUPPROP> = ({text}) => {
    const notify = () =>toast(text);
    notify()
  return (
    <div>
     
      <Toaster  />
    </div>
  );
};