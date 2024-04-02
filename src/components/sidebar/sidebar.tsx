import Image from 'next/image'
import React from 'react'
import './sidebar.css'
import Author from './Author'
import Tagbox from './Tagbox'


const Sidebar:React.FC = () => {

  interface AuthorData{
    authorName:string,

  }
let authData:AuthorData[]=[
  {authorName:'Franky Donner'},
  {authorName:'Jake Hopper'},
  {authorName:'Robert Roode'},
  {authorName:'John Joester'},

]

  return (
    <div className='sidebar' >
      <Tagbox/>
      <div className='author-box' >
      <h5>Popular authors</h5>

<div>
  {
    authData.map((author,i)=>{
      return(
<Author key={i} author={author} />

      )
    })
  }
 
</div>


      </div>
      




    </div>
  )
}

export default Sidebar