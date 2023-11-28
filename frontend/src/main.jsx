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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/home/post/:id",
    element: <Blog_detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
