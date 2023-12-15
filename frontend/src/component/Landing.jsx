import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div>
      <nav className='flex px-10 py-4 justify-between'>
      <h1 className='text-4xl font-semibold'>Dev.Blog</h1>
      <div className='w-1/6 flex justify-around'>
        <Link to={'login'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Login</Link>
        <Link to={'signin'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>SignIn</Link>
      </div>
    </nav>
      <div className='flex justify- items-center h-[80vh]'>
        <div className='flex flex-col w-5/12 ml-16'>
          <p className='text-5xl font-normal mb-8'>Explore, Learn, Evolve</p>
          <p className='text-lg'>Embark on a journey of inspiration and knowledge with our captivating blog. Immerse yourself in thought-provoking content that not only entertains but also enlightens, fostering a community of curious minds eager to explore the boundless world of ideas</p>
        </div>
        <img className='w-6/12 h-[100%]' src="src\assets\Hero-section.png" alt="" srcset="" />
      </div>
    </div>
    </div>
  )
}

export default Landing
