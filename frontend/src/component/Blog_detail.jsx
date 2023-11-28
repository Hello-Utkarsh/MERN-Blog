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
        </div>
    )
}

export default Blog_detail
