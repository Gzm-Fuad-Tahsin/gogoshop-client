import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Contexts/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="bottom-right"
          reverseOrder={false} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
