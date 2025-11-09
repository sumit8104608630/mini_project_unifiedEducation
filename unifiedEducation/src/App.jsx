import React from 'react'
import   "./index.css"
import Header from './Components/Header'
import Layout from './Pages/Layout'
import Landing from './Pages/Landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
function App() {

const router=createBrowserRouter([
  {
    path: "/",
    Component :Layout,
    children:[
      {
        path: "/",
        Component: Landing
      },
      {
        path:"/about",
        Component: About
      }
    ]
  }
])

  return (
    <>
    <RouterProvider router={router}>
          <Layout/>
    </RouterProvider>
    </>
  )
}

export default App