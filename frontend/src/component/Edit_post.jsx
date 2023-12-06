import React from 'react'

const Edit_post = () => {
  return (
    <form action="" className='mx-auto flex w-10/12 my-10'>
            <div className='w-full'>
                <h1 className='text-4xl w-fit mx-auto font-medium'>Edit post</h1>
                <div className='flex flex-col mx-auto w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Title</label>
                    <input type="text" className='rounded-md px-2 h-8' />
                </div>
                <div className='flex flex-col mx-auto w-6/12 my-4'>
                    <label htmlFor="" className='my-1'>Description</label>
                    <input type="text" className='rounded-md px-2 h-8' />
                </div>
                <div className='flex flex-col mx-auto w-6/12 mt-6'>
                    <input type="file" className='rounded-md h-8' />
                </div>
                <div className='mx-auto flex justify-center'>
                    <button type="submit" className='w-32 py-2 my-5 mx-auto rounded-xl font-medium text-center bg-[#f14843]'>Edit Post</button>
                </div>
            </div>
        </form>
  )
}

export default Edit_post
