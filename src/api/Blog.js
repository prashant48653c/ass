import { useRouter } from 'next/router'

 
  const router = useRouter()

  export async function uploadBlog(userData) {
    const formData = new FormData(userData)
    const title = formData.get('title')
    const blog = formData.get('blog')
    const author = formData.get('author')
    const tags = formData.get('tags')



    const response = await fetch(`${process.env.API_ROUTE}/blog/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title,blog,author,tags }),
    })

    if (response.ok) {
        console.log(response)
      router.push('/profile')
      return response
    } else {
    console.log("error")
    }
  }
 

  

  
  export async function signUp(userData) {
    const formData = new FormData(userData)
    const email = formData.get('email')
    const password = formData.get('password')
    const username = formData.get('username')


    const response = await fetch(`${process.env.API_ROUTE}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username, email, password }),
    })

    if (response.ok) {
        console.log(response)
      router.push('/feed')
      return response
    } else {
    console.log("error")
    }
  }
 

  
