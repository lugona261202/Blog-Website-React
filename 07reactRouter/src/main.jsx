import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])
// we have another way of creating router which is as follows
 cont router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path=''element ={<Home/>}/>
      <Route path='about'element ={<About/>}/>
      <Route path='contact'element ={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      Loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
// this router provider always needs a prop which is router in our case
// this router we will further create

// loader helps to load content from api directly even before useEffect starts
