import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { AppProps } from './App.tsx'
import './index.css'

const data : AppProps = {
  name: "Lawrence"
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>,
)
