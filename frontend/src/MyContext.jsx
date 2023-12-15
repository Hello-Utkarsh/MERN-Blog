import { createContext, useState } from 'react';

const MyContext = createContext("");

const MyState = (props) => {
    const [text, setText] = useState("hello");

    return(
        <MyContext.Provider value = {{text}}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContext, MyState}