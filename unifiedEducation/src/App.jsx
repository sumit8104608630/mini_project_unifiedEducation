import React from 'react'
import   "./index.css"
import Header from './Components/Header'
import Layout from './Pages/Layout'
import Landing from './Pages/Landing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import AnalyticsDashBoard from './Pages/AnalyticsDashBoard'
import StudentPortal from './Pages/StudentPortal'
import FacultyPortal from './Pages/FacultyPortal'
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
      },
      {
        path:"/analytic",
        Component: AnalyticsDashBoard
      },
      {
        path:"/student-portal",
        Component: StudentPortal
      },
      {
        path:"/faculty-portal",
        Component: FacultyPortal
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