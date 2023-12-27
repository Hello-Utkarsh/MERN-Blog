import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';

const Edit_post = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate()
    const blog_id = localStorage.getItem("blogId")
    const auth_token = localStorage.getItem("token")
    const title = localStorage.getItem('title')
    const desc = localStorage.getItem('desc')

    let handleEdit = async (user) => {
        // console.log(user.title, user.Description)
        console.log(blog_id)
        try {
            const response = await fetch(`http://localhost:3000/notes/updateblog/${blog_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': auth_token,
                },
                body: JSON.stringify({
                    title: user.title,
                    discription: user.Description
                })
            })
            let update = await response.json()
            if (response.ok) {
                navigate('/profile')
            }
        } catch (error) {

        }
    }
    return (
        <Form onSubmit={handleSubmit(handleEdit)} className='mx-auto flex w-10/12 my-10'>
            <div className='w-full'>
                <h1 className='text-4xl w-fit mx-auto font-medium'>Edit post</h1>
                <div className='flex flex-col mx-auto w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Title</label>
                    <Controller
                        name='title'
                        control={control}
                        defaultValue={title}
                        rules={{
                            required: "Title is required",
                        }}
                        render={({ field }) => (
                            <>
                                <input type="text"  {...field} className='rounded-md px-2 h-8' />
                                {errors.title && <p className='text-sm text-red-600 font-medium'>{errors.title.message}</p>}
                            </>
                        )}
                    />
                </div>
                <div className='flex flex-col mx-auto w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Description</label>
                    <Controller
                        name='Description'
                        control={control}
                        rules={{
                            required: "Description is required",
                        }}
                        defaultValue={desc}
                        render={({ field }) => (
                            <>
                                <input type="text" {...field} className='rounded-md px-2 h-8' />
                                {errors.Description && <p className='text-sm text-red-600 font-medium'>{errors.Description.message}</p>}
                            </>
                        )}
                    />
                </div>
                <div className='flex flex-col mx-auto w-6/12 mt-6'>
                    <input type="file" className='rounded-md h-8' />
                </div>
                <div className='mx-auto flex justify-center'>
                    <button type="submit" className='w-32 py-2 my-5 mx-auto rounded-xl font-medium text-center bg-[#f14843]'>Edit Post</button>
                </div>
            </div>
        </Form>
    )
}

export default Edit_post
