import React from 'react'
import { Newspaper, Sparkles, Mail, Lock, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'

const signup = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4'>
      <div className='w-full max-w-4xl flex gap-8 items-center'>
        {/* Left Section */}
        <div className='w-1/2 text-center md:text-left space-y-6 p-8'>
          <div className='flex gap-2 items-center'>
            <span className='w-9 h-9 rounded-lg bg-gradient-to-br  from-pink-600 to-purple-600 flex items-center justify-center '>
              <Newspaper size={20} className='text-white' /></span>
            <span className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r  from-pink-600 to-purple-600'>
              NextNews</span>
          </div>
          <h1 className='text-4xl font-bold text-gray-800'>Stay Informed with NextNews</h1>
          <p className='text-gray-600'>Get personalised news updates and insights powered by artificial intelligence</p>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2 text-gray-700'>
              <Sparkles size={20} className='text-purple-500' />
              <span>AI-Curated Content</span>
              <span></span>
            </div>
            <div className='flex items-center gap-2 text-gray-700'>
              <Sparkles size={20} className='text-purple-500' />
              <span>Smart Summarization</span>
              <span></span>
            </div>
            <div className='flex items-center gap-2 text-gray-700'>
              <Sparkles size={20} className='text-purple-500' />
              <span>Personalised Feed</span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Create Account</h2>
          <form className='space-y-4'>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
        </div>
        <div>
          <label className='text-sm font-medium text-gray-700 mb-1'>Email Address</label>
          <div className='relative'>
            <Mail size={20} className='text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label className='text-sm font-medium text-gray-700 mb-1'>
            Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>
        <Link href={'/dashboard'}><button
          type="submit"
          className="w-full bg-purple-600 cursor-pointer text-white py-2 px-4 rounded-sm hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group"
        >
          Signup
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        </Link>
      </form>
      <div className="mt-6 text-center">
        <Link href={'/login'}><button
          className="text-purple-600 hover:text-purple-700 cursor-pointer text-sm font-medium"
        >
          Already have an account? Login
        </button>
        </Link>

      </div>
    </div>
      </div >
    </div >
  )
}

export default signup
