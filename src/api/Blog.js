import { getCookie } from "@/helper/cookie"
import axios from 'axios'
import toast from "react-hot-toast";
 
export async function uploadBlog(blogData) {
  console.log("Upload function running");
  
  const { title, desc, selectedTags, authorName } = blogData;

  try {
    const accessToken=getCookie('accesstoken')
    console.log(accessToken)
    const response = await axios.post(
      'http://localhost:4000/blogs/create',
      {
        head: title,
        desc: desc,
        authorName: authorName,
        tags: selectedTags,
        blogImg: ''
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
console.log(response)
    if (response) {
      const data = response.data;
      console.log(data);
  

      return data;
    } else {
      console.log("Error: Response not OK");
    }
  } catch (error) {
    console.error("Errodfsdfdsfr:", error);
 console.log(error.response.data.message[0])
    return error.response.data.message[0]
  }
}

 
 

export async function getAllBlog(query) {
  try {
    const accesstoken = await getCookie('accesstoken');
    console.log(query);
    const { page, user, keyword, tags } = query;
    const url = new URL('http://localhost:4000/blogs');
    url.searchParams.append('page', page);
    if (user !="") url.searchParams.append('user', user);
    if (tags != "" && tags != undefined) {
      tags.forEach(tag => url.searchParams.append('tags[]', tag));
    }
    if (keyword) url.searchParams.append('keyword', keyword);
    console.log(url);

    const response = await axios.get(url.toString(),{
      headers:{
        Authorization:`Bearer ${accesstoken}`
      }
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

  
 
export async function getSingleBlog(id) {
  try {
    const accesstoken = await getCookie('accesstoken');
    const response = await axios.get(`http://localhost:4000/blogs/${id}`,{
      headers:{
        Authorization: `Bearer ${accesstoken}`
      }
    });
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
}

  

 
export async function deleteBlog(id) {
  try {
    const accesstoken = await getCookie('accesstoken');
    const response = await axios.delete(`http://localhost:4000/blogs/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accesstoken}`
      }
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
}


  
 
export async function updateBlog(blogdata) {
  const { title, desc, authorName, selectedTags, id } = blogdata;
  try {
    const response = await axios.put(`http://localhost:4000/blogs/${id}`, {
      head: title,
      desc: desc,
      authorName: authorName,
      tags: selectedTags,
      blogImg: ''
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('accesstoken')}`
      }
    });

    const data = response.data;
    console.log(data, "Updated blog");
    return data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
}

 

  
