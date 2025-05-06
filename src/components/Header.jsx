import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profilebg.png"
import Navbar from './Navbar'
import { useState } from 'react'


const Header = () => {

  const [navOpen, setNavOpen] = useState(false)
  return (
   <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0' >
     <meta name="google-site-verification" content="-Xl-JtyGv-RzCbpqmMFFs-VU1A8n8Bebiv19Af4xC5U" />
    <div className='max-w-screen-2xl  w-full mx-auto px-4 flex justify-between items-center md:px-6  md:grid-cols-[1fr,3fr,1fr]' >
       <h1>
        <a href="" className=''>
            <img src={logo}  className='h-10  w-25' alt=""   />
        </a>
       </h1>
       <div className='relative md:justify-self-center' >
         <button className='md:hidden' onClick={()=> setNavOpen((prev)=> !prev)} >
            <span className='material-symbols-rounded' > 
              {navOpen ? 'close' : 'menu'}
            </span>
             </button>
             <Navbar navOpen={navOpen} />
       </div>
       <a href="#contact" className=' btn btn-secondary contact-btn
      ' >Contact Me</a>
    </div>
   </header>
  )
}

export default Header
