import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";

const Signin = () => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const [user, setName] = useState({ name: "", email: "", password: "" })

  const handleUser = (event) => {

    setName({ ...user, [event.target.name]: event.target.value })

  }

  const handleSignIn = () => {
    console.log(user.name, user.email, user.password)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignIn)}>
      <div className='flex flex-col justify-center rounded-2xl py-5 items-center w-3/12 mx-auto my-[22vh] bg-gray-200 shadow-2xl'>
        <div className='flex flex-col my-2 mx-auto w-3/5'>
          <label className='my-1' htmlFor="">Name</label>
          <Controller
            name='name'
            control={control}
            rules={{
              required: "Please enter a name"
            }}
            render={({ field }) => (
              <>
                <input name='name' onChange={handleUser} {...field} className='rounded-md px-2 h-8' type="text" />
                {errors.name && <p className='text-sm text-red-600 font-medium'>{errors.name.message}</p>}
              </>
            )}
          />
        </div>
        <div className='flex flex-col mx-auto my-2 w-3/5'>
          <label className='my-1' htmlFor="">Email</label>
          <Controller
            name='email'
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email"
              }
            }}
            render={({ field }) => (
              <>
                <input name='email' onChange={handleUser} {...field} className='rounded-md px-2 h-8' type="email" />
                {errors.email && <p className='text-sm text-red-600 font-medium'>{errors.email.message}</p>}
              </>
            )}
          />
        </div>
        <div className='flex flex-col mx-auto my-2 w-3/5'>
          <label className='my-1' htmlFor="">Password</label>
          <Controller
            name="password"
            control={control}
            rules={{
              minLength: {
                value: 4,
                message: 'Password must be at least 3 characters',
              },
              required: 'Password is required',
            }}
            render={({ field }) => (
              <>
                <input name='password' onChange={handleUser} {...field} className='rounded-md px-2 h-8' type="password" />
                {errors.password && <p className='text-sm text-red-600 font-medium'>{errors.password.message}</p>}
              </>
            )}
          />
        </div>
        <button type="submit" onClick={handleSignIn} className='w-20 py-2 my-5 rounded-xl font-medium text-center bg-[#f14843]'>Signin</button>
        <p>Already have an account? <Link className='underline' to={'/login'}>Login</Link></p>
      </div>
    </Form>
  )
}

export default Signin
