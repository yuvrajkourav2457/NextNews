'use client'

import React from 'react'
import Link from 'next/link'
import bgImg from "../public/Hero/NewsSVG.svg"
import Image from 'next/image'

const HeroSection = () => {
  return (
  <div className='min-h-[calc(100svh-4.32rem)] flex bg-gradient-to-br from-slate-50 to-slate-100 items-center justify-center'>

    {/* Left Section */}

    <div className='max-w-4/7 flex flex-col items-center  justify-center  text-black'>
      <h1 className='text-5xl font-bold text-slate-800'>Your Personalized News Experience</h1>
      <p className='max-w-full text-center text-gray-600 text-xl px-20 py-15 '>Welcome to NextNews, where innovation meets information! Experience the power of our AI-driven platform with features 
        like personalized content tailored to your interests, real-time updates ensuring you never miss breaking stories, 
        and concise summaries to keep you informed efficiently.</p>
      <div className='flex gap-6'>
        <button className='cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold ease-linear duration-200 hover:scale-105'>About Us</button>
        <button className='cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold ease-linear duration-200 hover:scale-105'>Learn More</button>
      </div>   
    </div>

    {/* Right Section */}
    <div className=' max-w-3/7' >
        <Image src={'/Hero/NewsSVG.svg'} height={600} width={600} alt="NextNews" className='aspect-square p-4' />
    </div>
  </div>
  )
}

export default HeroSection

