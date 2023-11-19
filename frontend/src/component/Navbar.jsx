import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex px-10 py-4 justify-between'>
      <h1 className='text-4xl font-semibold'>Dev.Blog</h1>
      <div className='w-1/6 flex justify-around'>
        <Link to={'login'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Login</Link>
        <Link to={'signin'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>SignIn</Link>
      </div>
    </nav>
  )
}

export default Navbar
