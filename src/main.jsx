import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import Layout from './layout/Layout.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>
<BrowserRouter>

<Layout/>

   </BrowserRouter>
</AuthProvider>
   
  </StrictMode>,
)
