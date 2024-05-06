import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Store} from './Reducer/Store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>,
    </BrowserRouter>
  </React.StrictMode>
)
