import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Initialize AOS - optimized for better performance
AOS.init({
  duration: 600,
  once: true,
  delay: 0,
  offset: 50,
  easing: 'ease-out-quart'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)