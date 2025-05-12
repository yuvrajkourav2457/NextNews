import React from 'react'
import Link from 'next/link'

const post = () => {
  return (
    <div className='border border-gray-300 p-5 rounded-lg'>
        <form>
            <div>
              <label className='text-sm font-medium text-gray-700 mb-1'>Title</label>
                <input
                  type="text"
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg "
                  placeholder="Enter title"
                />
            </div>
            <div>
              <label className='text-sm font-medium text-gray-700 mb-1'>Content</label>
                <textarea
                  type="text"
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg "
                  placeholder="Enter content"
                />
            </div>
            <div>
              <label className='text-sm font-medium text-gray-700 mb-1'>Thumbnail</label>
                <input
                  type="file"
                  id='image'
                  accept="image/*"
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg "
                  placeholder="thumbnail"
                />
            </div>
             <div>
              <label className='text-sm font-medium text-gray-700 mb-1'>Category</label>
                <textarea
                  type="text"
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg "
                  placeholder="Enter category"
                />
            </div>
             <div>
              <label className='text-sm font-medium text-gray-700 mb-1'>Tags</label>
                <input
                  type="text"
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg "
                  placeholder="Enter tags"
                />
            </div>
            <button
            type='submit'
            className="bg-purple-600 cursor-pointer text-white py-2 px-4 rounded-sm hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group">
             Create Post 
            </button>       
        </form>
    </div>
  )
}

export default post
