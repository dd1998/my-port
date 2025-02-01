import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';
<link href="https://fonts.googleapis.com/css2?family=Jersey+15&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
