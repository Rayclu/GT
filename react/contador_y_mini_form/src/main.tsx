import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContadorReact from './components/contador.tsx'
import Formularios from './components/form.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ContadorReact />
    <Formularios/>
  </StrictMode>,
)
