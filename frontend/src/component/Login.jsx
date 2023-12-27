import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";

const Login = () => {

  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (user) => {

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message)
        alert(data.message)
        throw new Error((`HTTP error! Status: ${response.status}, Message: ${data.message}`))
      }
      if (response.status == 200) {
        setSuccess(true)
        navigate("/home")
      }
      localStorage.setItem("token", data.authtoken)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <div className='flex flex-col justify-center rounded-2xl py-5 items-center w-3/12 mx-auto my-[22vh] bg-gray-200 shadow-2xl'>
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
                <input name='email'  {...field} className='rounded-md px-2 h-8' type="text" />
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
        <button type="submit" className='w-20 py-2 my-5 rounded-xl font-medium text-center bg-[#f14843]'>Login</button>
        <p>Don't have an account? <Link className='underline' to={'/signin'}>Signin</Link></p>
      </div>
    </Form>
  )
}

export default Login
