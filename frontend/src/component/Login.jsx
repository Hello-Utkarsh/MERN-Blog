import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center rounded-2xl py-5 items-center w-3/12 mx-auto mt-[30vh] bg-gray-200 shadow-2xl'>
      <div className='flex flex-col my-2 mx-auto w-3/5'>
        <label className='my-1' htmlFor="">Name</label>
        <input className='rounded-md px-2 h-8' type="text" />
      </div>
      <div className='flex flex-col mx-auto my-2 w-3/5'>
        <label className='my-1' htmlFor="">Email</label>
        <input className='rounded-md px-2 h-8' type="text" />
      </div>
      <div className='flex flex-col mx-auto my-2 w-3/5'>
        <label className='my-1' htmlFor="">Password</label>
        <input className='rounded-md px-2 h-8' type="text" />
      </div>
      <button type="submit" className='w-20 py-2 my-5 rounded-xl font-medium text-center bg-[#f14843]'>Login</button>
    </div>
  )
}

export default Login
