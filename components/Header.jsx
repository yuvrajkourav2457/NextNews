'use client'

import React from 'react'
import Link from 'next/link'
import { Newspaper} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex p-4 items-center gap-10 justify-between border-b border-gray-200 rounded-b-xl sticky top-0 bg-white z-50'>

   
       <section className='flex items-center'>
        <Link href={'/dashboard'} className='flex gap-2 items-center justify-center'>
        <span className='w-9 h-9 rounded-lg bg-gradient-to-br  from-pink-600 to-purple-600 flex items-center justify-center '>
          <Newspaper size={20} className='text-white' /></span>
        <span className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r  from-pink-600 to-purple-600'>
          NextNews</span>
        </Link>
       </section>

    </nav>
  )
}

export default Navbar 



