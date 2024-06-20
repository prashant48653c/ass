import axios from 'axios';
import { clearAllCookies, getCookie, setCookie } from '@/helper/cookie';

export async function loginUser(userData) {
  try {
     

    const response = await axios.post('http://localhost:4000/auth/login', userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

    if (response) {
      const { token, refreshToken, user } = response.data;
      setCookie("accesstoken", token, 172800);
      setCookie("refreshtoken", refreshToken, 604800);
      
      const userdata = JSON.stringify(user);
      localStorage.setItem('userData', userdata);
      console.log(response.data);
      return user;
    } else {
      console.log("Error at login");
    }
  } catch (err) {
    console.log("The error occurred at login route", err);
    return err.response.data.message
  }
}




export async function signUp(userData) {
  const { username, email, password } = userData;
  console.log("Inside the signup function", userData);
  

  try {
    const response = await axios.post('http://localhost:4000/auth/signup', {
      username,
      email,
      password,
    }, {
      headers: { 'Content-Type': 'application/json',  
       },
    });

    if (response) {
      const data = response.data;
      return data;
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}




export async function logOut() {
  const refreshToken = getCookie('refreshtoken');
const accesstoken=getCookie('accesstoken')
  try {
    const response = await axios.delete('http://localhost:4000/auth/logout', {
      headers: { 'Content-Type': 'application/json',Authorization:`Bearer ${accesstoken}` },
      data: { refreshToken }
    });

    if (response) {
      const data = response.data;
     await localStorage.clear('userData');
     await clearAllCookies()
      console.log(data);


    } else {
      console.log("Error at logout");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}



