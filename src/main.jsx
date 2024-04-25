import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <FirebaseProvider> */}
            {/* <HelmetProvider> */}
                <RouterProvider router={router} />
            {/* </HelmetProvider> */}
        {/* </FirebaseProvider> */}
  </React.StrictMode>,
)
