import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Receipe from './Receipe/Receipe.jsx'
import Contact from './Contact/Contact.jsx'
import About from './About/About.jsx'
import Blog from './Blog/Blog.jsx'
import Element from './Element/Element.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "receipe",
        element: <Receipe/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "element",
        element: <Element/>
      },
     
     
   ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)