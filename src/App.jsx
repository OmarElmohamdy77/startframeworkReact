import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Page404 from './Components/Page404/NotFound'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {

  const route = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
      {index:true, element: <Home/>},
      {path:'about', element: <About/>},
      {path:'Portfolio', element: <Portfolio/>},
      {path:'contact', element: <Contact/>},
      {path:'*', element: <Page404/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App