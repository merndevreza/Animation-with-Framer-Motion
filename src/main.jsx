import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Basic from './components/Basic.jsx'
import Button from './components/Button.jsx'
import Keyframes from './components/Keyframes.jsx'
import TextMotion from './components/TextMotion.jsx'
import TransitionType from './components/TransitionType.jsx'
import Counter from './components/Counter.jsx'
import ScrollRevel from './components/ScrollRevel.jsx'
import Variants from './components/Varients.jsx'
import StaggerAnimation from './components/StaggerAnimation.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/basic",
        element:<Basic/>
      },
      {
        path:"/button",
        element:<Button/>
      },
      {
        path:"/keyframes",
        element:<Keyframes/>
      },
      {
        path:"/text",
        element:<TextMotion/>
      },
      {
        path:"/transition",
        element:<TransitionType/>
      },
      {
        path:"/counter",
        element:<Counter/>
      },
      {
        path:"/scroll",
        element:<ScrollRevel/>
      },
      {
        path:"/variant",
        element:<Variants/>
      },
      {
        path:"/stagger",
        element:<StaggerAnimation/>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

    
  </React.StrictMode>,
)
