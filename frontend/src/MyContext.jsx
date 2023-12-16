import { createContext, useState } from 'react';

const MyContext = createContext("");

const MyState = (props) => {
    const [blogs, setBlogs] = useState("hello");

    const setnotes = (x) => {
        setNotes(x)
    }


    return(
        <MyContext.Provider value = {{blogs, setBlogs}}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyState}