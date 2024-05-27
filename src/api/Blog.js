
  export async function uploadBlog(blogData) {
 
console.log("first")
    const {title,desc}=blogData



    const response = await fetch(`http://localhost:4000/blogs/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
       },
      body: JSON.stringify({ head:title,desc,authorName:'wendy',tags:['Web'],blogImg:'' }),
    })

    if (response.ok) {
       let data=await response.json()
       console.log(data)
     
      return data
    } else {
    console.log("error")
    }
  }
 
  export async function getAllBlog(query) {
    try {
    const response=await fetch(`http://localhost:4000/blogs?page=${query.page}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }

  export async function getSingleBlog(id) {
    try {
    
      const response = await fetch(`http://localhost:4000/blogs/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }
  

  

  
 
 

  
