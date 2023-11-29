import React from 'react'
import Navbar from './Navbar'

const Blog_detail = () => {
    return (
        <div>
            <Navbar />
            <div className='my-5 mx-auto flex flex-col'>
                <div className='flex w-11/12 justify-between'>
                    <h1 className='text-2xl font-semibold mx-auto w-11/12 text-center'>Bitcoin: Decentralized Digital Currency and the Future of Peer-to-Peer Transactions</h1>
                    <div className='flex justify-around w-1/12'>
                        <span className="material-symbols-outlined text-lg">
                            edit
                        </span>
                        <span className="material-symbols-outlined text-lg font-semibold">
                            delete
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-7'>
                <img className='w-7/12 mx-auto my-4' src="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=384&h=228&c=1&rs=2&o=6&dpr=1.4&pid=SANGAM" alt="" />
                <p className='w-10/12 mx-auto my-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatem magnam beatae odit assumenda nulla nam. Unde dolorem, sint, dolorum temporibus voluptate dolores quod corporis fuga quasi ratione distinctio vitae.
                    Consectetur ad suscipit excepturi deserunt esse accusamus dolores minus molestiae aperiam nesciunt optio alias iusto repellat veniam et mollitia cum, fuga qui iste harum at doloremque. Ex asperiores ipsum iure.
                    Reiciendis culpa consequuntur numquam quia ipsum harum est eveniet ut? Eveniet dolorum alias possimus animi, doloremque maiores cum, provident quis voluptate nemo odit labore nihil blanditiis iure deleniti magnam vero.
                    Ea quisquam, labore assumenda pariatur libero neque hic unde eos sapiente, exercitationem facere odit iure ipsum. Delectus ea, nisi molestiae ducimus cum voluptas ipsam voluptates sint enim, at, repellat necessitatibus?</p>
            </div>
            <div className='w-11/12 mx-auto flex flex-col'>
                <h3 className='text-lg font-medium w-10/12 mx-auto'>Comments</h3>
                <div className='w-10/12 mx-auto my-4 text-slate-100'>
                    <div className='bg-gray-500 rounded-lg p-3'>
                        <div className='flex justify-between'>
                            <h1>username</h1>
                            <div className='w-14 flex justify-between'>
                                <span className="material-symbols-outlined text-lg">
                                    edit
                                </span>
                                <span className="material-symbols-outlined text-lg font-semibold">
                                    delete
                                </span>
                            </div>
                        </div>
                        <p className='w-11/12 my-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem soluta, quaerat aperiam rem at dolores quasi. Impedit dolore ex voluptatem obcaecati eum ea voluptatum, reprehenderit modi facilis? Accusantium, iste molestiae!</p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto flex justify-center mb-4'>
                <input type="text" placeholder='Comment' className='w-9/12 h-9 rounded-lg px-4'/>
                <button className='w-32 bg-[#f14843] h-9 rounded-lg'>Add Comment</button>
            </div>

        </div>
    )
}

export default Blog_detail
