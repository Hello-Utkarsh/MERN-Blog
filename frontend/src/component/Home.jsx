import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Blog_card from './Blog_card'

const Home = () => {
    const auth_token = localStorage.getItem('token')
    const [blogs, setBlogs] = useState("")
    const navigate = useNavigate()

    const Logout = () => {
        navigate("/login")
        localStorage.clear()
    }

    useEffect(() => {
        const fetch_blogs = async () => {
            try {
                const response = await fetch(`http://localhost:3000/notes/fetchallblogs`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': auth_token
                    }
                });
                const blogs = await response.json()
                if (!response.ok) {
                    navigate("/login")
                    throw new Error(`HTTP error! Status: ${response.status}, Message: ${blogs.error}`)
                }
                if (blogs.length > 0) {
                    setBlogs(blogs)
                }

            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        fetch_blogs()
    })
    
    return (
        <div>
            <nav className='flex px-10 py-4 justify-between'>
                <h1 className='text-4xl font-semibold'>Dev.Blog</h1>
                <div className='w-1/6 flex justify-around'>
                    <button onClick={Logout} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Logout</button>
                    <Link to={'/profile'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Profile</Link>
                </div>
            </nav>
            <div className='m-8 flex flex-col items-center'>
                {blogs ? blogs.map(element => {
                    return <Link to={`/home/post/${element._id}`}>
                        <Blog_card title={element.title} body={element.discription} id={element._id} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
                    </Link>
                }) : <h1 className='text-lg mx-auto my-9'>No Blogs</h1>}
            </div>
        </div>
    )
}

export default Home
