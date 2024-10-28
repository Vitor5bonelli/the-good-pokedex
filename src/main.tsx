import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './pages/helloWorld.tsx'
import "./main.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
)