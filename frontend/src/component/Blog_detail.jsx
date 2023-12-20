import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blog_detail = () => {
    const auth_token = localStorage.getItem('token')
    const [comment, setComment] = useState("")
    const [blogData, setData] = useState('')
    const blog_id = localStorage.getItem("blogId")

    const handleCommentdel = async (e) => {
        console.log(e.target.getAttribute('id'))
        const id = e.target.getAttribute('id')
        try {
            const response = await fetch(`http://localhost:3000/notes/comments/deletecomment/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                }
            })
            fetch_comments()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        const fetch_comments = async (id) => {
            try {
                const response = await fetch(`http://localhost:3000/notes/comments/fetchcomments/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': auth_token
                    }
                });
                const comments = await response.json()
                if (comments.length >= 1) {
                    setComment(comments)
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        const fetchblog = async (id) => {
            try {
                const response = await fetch(`http://localhost:3000/notes/findblog/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': auth_token
                    }
                })
                const blog = await response.json()
                setData(blog)
            } catch (error) {
                console.log(error)
            }
        }

        fetchblog(blog_id)
        fetch_comments(blog_id)
    }, [])
    return (
        <div>
            <div className='my-2 mx-auto flex flex-col'>
                <div className='flex justify-between mx-8 items-center'>
                    <h1 className='text-4xl font-semibold'>Dev.Blog</h1>
                    <div className='flex justify-around items-center w-2/12'>
                        <Link to={'/home/post/edit_post/1'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Edit</Link>
                        <button type="submit" className='w-20 py-2 my-5 rounded-xl font-medium text-center bg-[#f14843]'>Delete</button>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <img className='w-7/12 mx-auto my-4' src="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" alt="" />
                <h1 className='text-3xl font-bold w-full text-center mx-auto mt-8'>{blogData.title}</h1>
                <p className='w-10/12 mx-auto my-5 text-lg'>{blogData.discription}</p>
            </div>
            <div className='w-11/12 mx-auto flex flex-col'>
                <h3 className='text-lg font-medium w-10/12 mx-auto'>Comments</h3>
                {comment ? Array.from(comment).map(comment => {
                    return <div className='w-10/12 mx-auto my-4 text-slate-100'>
                        <div className='bg-gray-500 rounded-lg p-3'>
                            <div className='flex justify-between'>
                                <h1>@{comment.user}</h1>
                                <div className='w-14 flex justify-between'>
                                    <span className="material-symbols-outlined text-lg">
                                        edit
                                    </span>
                                    <span onClick={handleCommentdel} id={comment._id} className="material-symbols-outlined text-lg font-semibold">
                                        delete
                                    </span>
                                </div>
                            </div>
                            <p className='w-11/12 my-1'>{comment.discription}</p>
                        </div>
                    </div>
                }) : <h1 className='text-lg mx-auto my-9'>No Comments</h1>}

            </div>
            <div className='w-11/12 mx-auto flex justify-center mb-4'>
                <input type="text" placeholder='Comment' className='w-9/12 h-9 rounded-lg px-4' />
                <button className='w-32 bg-[#f14843] h-9 rounded-lg'>Add Comment</button>
            </div>

        </div>
    )
}

export default Blog_detail
