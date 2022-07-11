import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ricardo from './Ricardo'
import Keven from './Keven'
import Gabriel from './Gabriel'
import reportWebVitals from './reportWebVitals';

const DraftApp = () => {
  const dev = require('./dev.json')
  let app:any
  switch(dev.user) {
    
    case "Ricardo":
      app = <Ricardo />
      break;
    case "Keven":
      app = <Keven />
      break;
    case "Gabriel":
      app = <Gabriel />
      break;
  }

  return app
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DraftApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
