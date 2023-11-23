import React from 'react'
import { Link } from 'react-router-dom'
import Blog_card from './Blog_card'

const Home = () => {
    return (
        <div>
            <nav className='flex px-10 py-4 justify-between'>
                <h1 className='text-4xl font-semibold'>Dev.Blog</h1>
                <div className='w-1/6 flex justify-around'>
                    <Link to={'/home'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Home</Link>
                    <Link to={'/profile'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Profile</Link>
                </div>
            </nav>
            <div className='m-8'>
                <Blog_card />
            </div>
        </div>
    )
}

export default Home
