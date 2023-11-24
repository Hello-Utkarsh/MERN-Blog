import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";

const Signin = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState("")

  const handleSignIn = async(user) => {
    
    try{
      const response = await fetch('http://localhost:3000/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.name, 
          email: user.email,
          password: user.password
        }),
      });

      const data = await response.json();
      if (response.status == 200) {
        setSuccess(true)
        navigate("/home")
      }
      console.log(data.authtoken)
      // localStorage.setItem("token", data.authtoken)
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleSignIn)}>
      {success && <h1>Success</h1>}
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
                <input name='name' {...field} className='rounded-md px-2 h-8' type="text" />
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
                <input name='email' {...field} className='rounded-md px-2 h-8' type="text" />
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
                <input name='password' {...field} className='rounded-md px-2 h-8' type="password" />
                {errors.password && <p className='text-sm text-red-600 font-medium'>{errors.password.message}</p>}
              </>
            )}
          />
        </div>
        <button type="submit" className='w-20 py-2 my-5 rounded-xl font-medium text-center bg-[#f14843]'>Signin</button>
        <p>Already have an account? <Link className='underline' to={'/login'}>Login</Link></p>
      </div>
    </Form>
  )
}

export default Signin
