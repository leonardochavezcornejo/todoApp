import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './pages/MainPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import de boostrap
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <MainPage/>
  </StrictMode>,
)
