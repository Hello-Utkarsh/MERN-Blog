import React from 'react'

const Create_post = () => {
    return (
        <form action="" className='mx-auto flex w-10/12 my-10'>
            <div className='w-full'>
                <h1 className='text-4xl w-fit mx-auto font-medium'>Create post</h1>
                <div className='flex flex-col w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Title</label>
                    <input type="text" className='rounded-md px-2 h-8'/>
                </div>
                <div className='flex flex-col w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Description</label>
                    <input type="text" className='rounded-md px-2 h-8'/>
                </div>
                <div className='flex flex-col w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Title</label>
                    <input type="text" className='rounded-md px-2 h-8'/>
                </div>
            </div>
        </form>
    )
}

export default Create_post
