import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './component/Login.jsx';
import Signin from './component/Signin.jsx';
import Home from './component/Home.jsx';
import Blog_card from './component/Blog_card.jsx';
import Blog_detail from './component/Blog_detail.jsx';
import Create_post from './component/Create_post.jsx';
import Edit_post from './component/Edit_post.jsx';
import Profile from './component/Profile.jsx';
// import { MyContext } from './MyContext.jsx';
import Landing from './component/Landing.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
