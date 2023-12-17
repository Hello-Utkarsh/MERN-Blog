import React, { useContext } from 'react'
import { MyContext } from '../MyContext';

const Blog_card = (props) => {
  const context = useContext(MyContext);
  // const { setBlogs } = context
  let title = props.title ? props.title : ""
  let blog = props.blog ? props.blog : ""
  let body = props.body ? props.body : ""
  const set_blogs = () => {
    localStorage.setItem("blogId", blog._id)
  }

  return (
    <div onClick={set_blogs} className='w-11/12 mx-auto rounded-xl p-2 flex rounded-x hover:shadow-xl hover:shadow-slate-600 transition duration-300 items-center justify-center bg-center my-4'>
      <img src={props.img_url} className='w-96 mx-10' alt="" />
      <div className='flex flex-col items-start mx-10 w-7/12'>
        <h2 className='text-xl font-medium w-10/12 my-2'>{title.length > 35 ? title.slice(0, 30) + "....." : title}</h2>
        <p className='w-10/12 my-2'>{body.length > 230 ? body.slice(0, 230) + "...." : body}</p>
      </div>
    </div>
  )
}

export default Blog_card
