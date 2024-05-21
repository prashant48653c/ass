import { useRouter } from 'next/router'

 
  const router = useRouter()

  export async function loginUser(userData) {
    const formData = new FormData(userData)
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch(`${process.env.API_ROUTE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
        console.log(response)
      router.push('/feed')
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
 

  
