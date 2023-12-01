import React from 'react'

const Blog_card = (props) => {
  let title = props.title ? props.title : ""
  let body = props.body ? props.body : ""
  return (
    <div className={`w-11/12 mx-auto rounded-xl p-2 flex rounded-x hover:shadow-xl hover:shadow-slate-600 transition duration-300 items-center justify-around bg-center my-4`}>
      <img src={props.img_url} className='w-96' alt="" />
      <div className='flex flex-col items-start'>
        <h2 className='mx-auto text-xl font-medium w-10/12 my-2'>{title.length > 35 ? title.slice(0, 30) + "....." : title}</h2>
        <p className='mx-auto w-10/12 my-2'>{body.length > 230 ? body.slice(0, 230) + "...." : body}</p>
      </div>
    </div>
  )
}

export default Blog_card
