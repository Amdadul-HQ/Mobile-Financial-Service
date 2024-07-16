import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes';
import ContextComponent from './Context/ContextComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponent>
    <RouterProvider router={router}>
    </RouterProvider>
    </ContextComponent>
  </React.StrictMode>,
)
