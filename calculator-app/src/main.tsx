import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Calculator } from './components/calculator'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="bg-green-100 w-full h-full flex items-center justify-center w-screen">
    <Calculator />
  </div>
  </StrictMode>,
)
