'use client'

import React from 'react'
import Link from 'next/link'
import { Newspaper} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex p-4 items-center gap-10 justify-around border-b border-gray-200 sticky top-0 bg-white z-50'>

      {/* Left Section */}
       <section className='flex items-center'>
        <Link href={'/'} className='flex gap-2 items-center justify-center'>
        <span className='w-9 h-9 rounded-lg bg-gradient-to-br  from-pink-600 to-purple-600 flex items-center justify-center '>
          <Newspaper size={20} className='text-white' /></span>
        <span className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r  from-pink-600 to-purple-600'>
          NextNews</span>
        </Link>
       </section>

      {/*Center Section */}
       <section>
        <ul className='flex gap-6 items-center px-10'>
          <li className='text-md ease-linear duration-200 cursor-pointer hover:scale-105'>Home</li>
          <li className='text-md ease-linear duration-200 cursor-pointer hover:scale-105'>About</li>
          <li className='text-md ease-linear duration-200 cursor-pointer hover:scale-105'>Trending</li>
          <li className='text-md ease-linear duration-200 cursor-pointer hover:scale-105'>Post</li>
        </ul>
       </section>

      {/* Right Section */} 
       <section className='flex items-center gap-3'>
        <Link href={'/login'}>
        <button className='cursor-pointer rounded-full shadow bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold ease-linear duration-200 hover:scale-105 py-2 px-4 text-sm min-w-20'>Login</button>
        </Link>
        <Link href={'/signup'}>
        <button className='cursor-pointer rounded-full shadow bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold ease-linear duration-200 hover:scale-105 py-2 px-4 text-sm min-w-20'>SignUp</button>
        </Link>      
       </section>
    </nav>
  )
}

export default Navbar 



