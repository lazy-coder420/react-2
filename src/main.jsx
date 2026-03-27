import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Divel from '../Divel.jsx'
import Part1 from './corFile/Part1.jsx'     

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Divel/>
    <Part1/>

    <App />
  </StrictMode>,
)
