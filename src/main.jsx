import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-[1200px] mx-auto">
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
</div>
)
