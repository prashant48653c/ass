import Image from 'next/image'
import React from 'react'
import { IoMdMail } from 'react-icons/io'
import './about.css'
import '../contact/contact.css'


const AboutPage:React.FC = () => {
return (
<div className='contact about'>

<div className="heading">
<h2>About Us 🤷‍♂️</h2>
</div>
<div style={{alignItems:'center'}} className="flex-area f-area-abt">
<div className="form">
<p>
Introducing Bloggy: your go-to platform for effortless blogging. With its user-friendly interface and customizable features, Bloggy makes sharing your thoughts, stories, and ideas a breeze. Join the vibrant community, express yourself creatively, and make your mark in the digital world with Bloggy.</p>

<p>
Discover the power of storytelling with Bloggys robust features, designed to elevate your blogging experience to new heights. Seamlessly integrate multimedia elements such as images, videos, and interactive content to captivate your audience and bring your narratives to life.</p>
</div>
<div className="form-image">
<Image className='about-img' width={450} alt='form-image' height={450} src={'/abt.svg'} />
</div>
</div>


</div>
)
}

export default AboutPage