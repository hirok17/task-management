import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import ErrorPage from './Pages/Error/ErrorPage.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import Dashboard from './Dashboard/Dashboard.jsx'
import DashboardHome from './Dashboard/page/DashboardHome.jsx'
import Tasks from './Dashboard/page/Tasks.jsx'
import ManageTask from './Dashboard/page/ManageTask.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard",
        element:<DashboardHome></DashboardHome>,
        children:[
         {
          path:"create-tasks",
          element:<Tasks></Tasks>
         },
         {
          path:"task",
          element:<ManageTask></ManageTask>
         }

        ]
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
