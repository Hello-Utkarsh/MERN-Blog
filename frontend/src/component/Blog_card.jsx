import React from 'react'

const Blog_card = () => {
  let title = "10 Great Machine Learning (ML) and Artificial Intelligence (AI) Blogs To Follow"
  let body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veritatis harum sunt unde itaque exercitationem eveniet voluptates, culpa ipsam doloremque quasi ducimus aliquam necessitatibus, a, quod deleniti natus nostrum placeat."
  return (
    <div className='h-96 w-96 rounded-xl hover:shadow-xl transition duration-300 flex flex-col items-center bg-[#c2c2c2]'>
      <img src="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" className='w-10/12 h-[45%] mx-auto my-3' alt="" srcset="" />
      <h2 className='mx-auto text-xl font-medium w-10/12 my-1'>{title.length>35 ? title.slice(0, 30)+"....." : title }</h2>
      <p className='mx0auto w-11/12 my-1'>{body.length>230 ? body.slice(0,230)+"...." : body}</p>
    </div>
  )
}

export default Blog_card
