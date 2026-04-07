import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './contexts/AppContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <AuthProvider>
        <CartProvider>

          <StrictMode>
            <App />
          </StrictMode>

        </CartProvider>
      </AuthProvider>
    </AppContextProvider>
  </BrowserRouter>

)
