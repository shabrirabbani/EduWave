import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../node_modules/flowbite/dist/flowbite.min.js";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { SekolahProvider } from './context/AdminContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SekolahProvider>
        <App />
      </SekolahProvider>
    </Provider>
  </React.StrictMode>,
)
