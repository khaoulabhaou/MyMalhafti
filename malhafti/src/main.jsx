import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Malhfa from './myProject/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Malhfa/>
  </StrictMode>,
)