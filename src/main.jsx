import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/index.css'
import App from './components/App'

const root = document.getElementById('root')

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
