import axios from 'axios';
import { getCookie, setCookie } from "@/helper/cookie";


export async function getSingleUser(id) {
  try {
    const accesstoken = await getCookie('accesstoken')

    const response = await axios.get(`http://localhost:4000/author/${id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`
      }
    });
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }


}



export async function updateUser({ username, id, desc }) {
  try {
    const accesstoken = await getCookie('accesstoken')

    const response = await axios.put('http://localhost:4000/author', {
      username,
      id,
      desc
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accesstoken}`
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

export async function updatePP(file, _id) {

  console.log(file)
  const accesstoken = await getCookie('accesstoken')
  const formData = new FormData();
  formData.append('file', file)

  const res = await axios.patch(`http://localhost:4000/author/${_id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accesstoken}`
    },

  });
  const localData = JSON.stringify(res.data);
  localStorage.setItem('userData', localData);

  console.log(res.data);
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
