import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'rsuite/dist/rsuite-no-reset.min.css';
import "react-international-phone/style.css";
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
