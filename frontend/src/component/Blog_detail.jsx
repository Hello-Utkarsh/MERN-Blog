import React, { useContext, useEffect, useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";

const Blog_detail = () => {
    const navigate = useNavigate()
    const auth_token = localStorage.getItem('token')
    const [comment, setComment] = useState("")
    const [verified, setVerified] = useState(false)
    const [blogData, setData] = useState('')
    const blog_id = localStorage.getItem("blogId")
    const { control, handleSubmit, formState: { errors } } = useForm();

    const Delblog = async () => {
        // DELETEING BLOG
        try {
            console.log(blog_id)
            const response = await fetch(`http://localhost:3000/notes/deleteblog/${blog_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                }
            });
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }

    const handleComment = async (comment) => {
        // HANDLING THE INPUT FROM COMMENT_INPUT_BOX
        try {
            const response = await fetch(`http://localhost:3000/notes/comments/postcomment/${blog_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                },
                body: JSON.stringify({
                    discription: comment.comment,
                }),
            });
            if (!response.ok) {
                throw new Error(`${comments.error}. Status: ${response.status}`);
            }
            fetch_comments(blog_id)
        } catch (error) {
            console.log(error.message)
        }
    }

    const fetch_comments = async (id) => {
        // FETCHING ALL THE COMMENTS OF THE BLOG
        try {
            const response = await fetch(`http://localhost:3000/notes/comments/fetchcomments/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                }
            });
            const comments = await response.json()
            if (!response.ok) {
                setComment(false)
                throw new Error(`${comments.error}. Status: ${response.status}`);
            }
            setComment(comments)
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    const handleCommentdel = async (e) => {
        // getting id of the comment clicked
        const id = e.target.getAttribute('id')
        try {
            const response = await fetch(`http://localhost:3000/notes/comments/deletecomment/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token
                }
            })
            fetch_comments(blog_id)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const verifyOwner = async (blog_user) => {
            // VERIFYING IS THE USER IS OWNER OF THE BLOG
            try {
                const response = await fetch(`http://localhost:3000/auth/verify`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': auth_token,
                        'blog_user': blog_user
                    }
                })
                const id = await response.json()
                if (id.message == "Verified") {
                    setVerified(true)
                }
            } catch (error) {
                console.log(error)
            }
        }


        const fetchblog = async (id) => {
            // FETCHING USERS BLOG
            try {
                const response = await fetch(`http://localhost:3000/notes/findblog/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': auth_token
                    }
                })
                const blog = await response.json()
                setData(blog)
                verifyOwner(blog.user)
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
                    {verified ? <div className='flex justify-around items-center w-2/12'>
                        <Link to={'/home/post/edit_post/1'} className='bg-[#f14843] w-20 rounded-xl font-medium text-center py-2 my-auto'>Edit</Link>
                        <button type="submit" onClick={Delblog} className='w-20 py-2 my-5 rounded-xl font-medium text-center bg-[#f14843]'>Delete</button>
                    </div> : <h1></h1>}
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
                                    <span className="material-symbols-outlined text-lg cursor-pointer">
                                        edit
                                    </span>
                                    <span onClick={handleCommentdel} id={comment._id} className="material-symbols-outlined text-lg font-semibold cursor-pointer">
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
                <Form onSubmit={handleSubmit(handleComment)} className='w-9/12 flex justify-center'>
                    <Controller
                        name='comment'
                        control={control}
                        render={({ field }) => (
                            <>
                                <input {...field} type="text" name='comment' placeholder='Comment' className='w-full h-9 rounded-lg px-4' />
                                {errors.email && <p className='text-sm text-red-600 font-medium'>{errors.email.message}</p>}
                            </>
                        )}
                    />
                    <button type='submit' className='w-32 bg-[#f14843] h-9 rounded-lg'>Add Comment</button>
                </Form>
            </div>

        </div>
    )
}

export default Blog_detail
