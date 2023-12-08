import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Form } from 'react-router-dom'

const Create_post = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    let handlePost = (user) => {
        console.log(user)
    }
    return (
        <Form onSubmit={handleSubmit(handlePost)} className='mx-auto flex w-10/12 my-10'>
            <div className='w-full'>
                <h1 className='text-4xl w-fit mx-auto font-medium'>Create post</h1>
                <div className='flex flex-col mx-auto w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Title</label>
                    <Controller
                        name='title'
                        control={control}
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
                        render={({ field }) => (
                            <>
                                <input type="text"  {...field} className='rounded-md px-2 h-8' />
                                {errors.Description && <p className='text-sm text-red-600 font-medium'>{errors.Description.message}</p>}
                            </>
                        )}
                    />
                </div>
                <div className='flex flex-col mx-auto w-6/12 mt-6'>
                    <input type="file" className='rounded-md h-8' />
                </div>
                <div className='mx-auto flex justify-center'>
                    <button type="submit" className='w-32 py-2 my-5 mx-auto rounded-xl font-medium text-center bg-[#f14843]'>Create Post</button>
                </div>
            </div>
        </Form>
    )
}

export default Create_post
