import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ToastContainer position="top-right" autoClose={3000} />
  <StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </Provider>
  </StrictMode>
  </BrowserRouter>
)
