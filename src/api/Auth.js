import { useRouter } from 'next/router'
 
  export async function loginUser(userData) {
    const response = await fetch(`http://localhost:4000/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })

    if (response.ok) {
      const data=await response.json()
        console.log(data)
      return data
    } else {
    console.log("error at login")
    }
  }
 

  

  
  export async function signUp(userData) {
   
    const {username,email,password}= userData
console.log("Inside the signup function",userData)

    const response = await fetch(`http://localhost:4000/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username, email, password }),
    })
    

    if (response.ok) {
       
    const data=await response.json()
      return data
    } else {
    console.log("error")
    }
  }
 

  
