import axios from 'axios';
import { getCookie, setCookie } from "@/helper/cookie";


export async function getSingleUser(id) {
  try {
    const response = await axios.get(`http://localhost:4000/author/${id}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }


}

 

export async function updateUser({ username, id, desc }) {
  try {
    const response = await axios.put('http://localhost:4000/author', {
      username,
      id,
      desc
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
      }
    });

    if (response.status === 200) {
      const data = response.data;
      const localData = JSON.stringify(data);
      localStorage.setItem('userData', localData);
      console.log(data);
      return data;
    } else {
      console.log("Error at update user");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}


 


export async function getRefresh() {
  const aToken = await getCookie('accesstoken');
  if (!aToken) {
    const rToken = getCookie('refreshtoken');
    if (rToken) {
      try {
        const response = await axios.post('http://localhost:4000/auth/refreshaccesstoken', {
          headers: { 'Content-Type': 'application/json' },
          data: { REFRESHTOKEN: rToken }
        });
        const data = response.data;
        console.log(data);
        setCookie('accesstoken', data.accessToken, 172800);
        setCookie('refreshtoken', data.refreshToken, 604800);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }
}
