import React from 'react'
import { Link } from 'react-router-dom'
import Blog_card from './Blog_card'

const Home = () => {
    let title = "Bitcoin: Decentralized Digital Currency and the Future of Peer-to-Peer Transactions"
    let body = "Decentralized digital currency, operates on blockchain, limited supply, peer-to-peer transactions, volatile value, potential store of value or payment method."
    return (
        <div>
            <nav className='flex px-10 py-4 justify-between'>
                <h1 className='text-4xl font-semibold'>Dev.Blog</h1>
                <div className='w-1/6 flex justify-around'>
                    <Link to={'/home'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Home</Link>
                    <Link to={'/profile'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Profile</Link>
                </div>
            </nav>
            <div className='m-8 flex flex-col items-center'>
                <Blog_card title = {title} body = {body} img_url = "https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
                <Blog_card title = {title} body = {body} img_url = "https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
                <Blog_card title = {title} body = {body} img_url = "https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
                <Blog_card title = {title} body = {body} img_url = "https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
                <Blog_card title = {title} body = {body} img_url = "https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
                <Blog_card title = {title} body = {body} img_url = "https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM"/>
                
            </div>
        </div>
    )
}

export default Home
