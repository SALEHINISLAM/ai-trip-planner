import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './CreateTrip/Index.jsx'
import Header from './components/Custom/Header.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/create-trip',
    element: <CreateTrip></CreateTrip>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
