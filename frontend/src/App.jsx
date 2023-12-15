import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css'
import Login from './component/Login.jsx';
import Signin from './component/Signin.jsx';
import Home from './component/Home.jsx';
import Blog_detail from './component/Blog_detail.jsx';
import Create_post from './component/Create_post.jsx';
import Edit_post from './component/Edit_post.jsx';
import Profile from './component/Profile.jsx';
import { MyState } from './MyContext.jsx';
import Landing from './component/Landing.jsx';

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/home/post/:id",
    element: <Blog_detail />,
  },
  {
    path: "/home/post/edit_post/:id",
    element: <Edit_post />,
  },
  {
    path: "/home/post/create",
    element: <Create_post />,
  },
]

function App() {

  const router = createBrowserRouter(routes);

  return (
    <MyState>
      <RouterProvider router={router} />
    </MyState>
  )
}

export default App
