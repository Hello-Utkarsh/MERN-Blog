import React, { useContext, useEffect, useState } from 'react'
import Blog_card from './Blog_card'
import { Link, useNavigate } from 'react-router-dom'
// import { MyContext, MyState } from '../MyContext'
// import jwt from 'jsonwebtoken';

const Profile = () => {
  const navigate = useNavigate()
  const [userBlogs, setblogs] = useState("")
  const auth_token = localStorage.getItem('token')
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  // const context = useContext(MyContext);
  // const {notes, setnotes} = context



  useEffect(() => {

    const fetch_blogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/notes/fetchblogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': auth_token
          }
        });
        const blogs = await response.json()
        if (blogs.length !== 0) {
          setblogs(blogs)
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }


    const fetch_user = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/fetchuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': auth_token
          }
        });
        const user = await response.json()
        if (!response.ok) {
          navigate("/login")
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${user.error}`)
      }
        setname(user.user_data.user.name)
        setemail(user.user_data.user.email)
      } catch (error) {
        console.log('Error:', error.message)
      }
    }
    fetch_user()
    fetch_blogs()
  }, [])

  return (
    <div className='flex h-screen'>
      <div className='w-3/12 bg-[#c6c6c6] h-full fixed p-6'>
        <h1 className='text-xl font-bold text-center'>Profile</h1>
        <div className='my-5'>
          <h1 className='text-lg font-semibold'>Name</h1>
          <h1>{name}</h1>
        </div>
        <div className='my-5'>
          <h1 className='text-lg font-semibold'>Email</h1>
          <h1>{email}</h1>
        </div>
        <div className='my-5'>
          <h1 className='text-lg font-semibold'>About me</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, est ipsum. Nihil, numquam pariatur. Dicta quia distinctio quos officiis necessitatibus!</h1>
        </div>
      </div>
      <div className='flex flex-col ml-[25%] w-9/12'>
        <div className='flex justify-between w-2/4 ml-[40%]'>
          <h1 className='text-3xl font-semibold text-center p-6'>Posts</h1>
          <div className='flex w-2/5 justify-between'>
            <Link to={'/home'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Home</Link>
            <Link to={'/home/post/create'} className='bg-[#f14843] w-24 rounded-xl font-medium text-center py-2 my-auto'>Create Post</Link>
          </div>
        </div>
        {userBlogs ? userBlogs.map((blogs) => {
          return <Link to={`/home/post/${blogs._id}`}>
            <Blog_card title={blogs.title} id={blogs._id} body={blogs.discription} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
          </Link>
        }) : <h1 className='text-lg mx-auto mt-16'>No Posts</h1>}

      </div>
    </div>
  )
}

export default Profile
