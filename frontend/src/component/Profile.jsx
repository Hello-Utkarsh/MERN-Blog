import React from 'react'
import Blog_card from './Blog_card'
import { Link } from 'react-router-dom'

const Profile = () => {

  let id = 5
  let title = "Bitcoin: Decentralized Digital Currency and the Future of Peer-to-Peer Transactions"
  let body = "Decentralized digital currency, operates on blockchain, limited supply, peer-to-peer transactions, volatile value, potential store of value or payment method."

  return (
    <div className='flex h-screen'>
      <div className='w-3/12 bg-[#c6c6c6] h-full fixed p-6'>
        <h1 className='text-xl font-bold text-center'>Profile</h1>
        <div className='my-5'>
          <h1 className='text-lg font-semibold'>Name</h1>
          <h1>Xyz</h1>
        </div>
        <div className='my-5'>
          <h1 className='text-lg font-semibold'>Email</h1>
          <h1>xyz@gmail.com</h1>
        </div>
        <div className='my-5'>
          <h1 className='text-lg font-semibold'>About me</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, est ipsum. Nihil, numquam pariatur. Dicta quia distinctio quos officiis necessitatibus!</h1>
        </div>
      </div>
      <div className='flex flex-col ml-[25%] w-9/12'>
        <h1 className='text-3xl font-semibold text-center p-6'>Posts</h1>
        <Link to={`/home/post/${id}`}>
          <Blog_card title={title} body={body} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
        </Link>
        <Link to={`/home/post/${id}`}>
          <Blog_card title={title} body={body} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
        </Link>
        <Link to={`/home/post/${id}`}>
          <Blog_card title={title} body={body} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
        </Link>
        <Link to={`/home/post/${id}`}>
          <Blog_card title={title} body={body} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
        </Link>
        <Link to={`/home/post/${id}`}>
          <Blog_card title={title} body={body} img_url="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" />
        </Link>
      </div>
    </div>
  )
}

export default Profile
