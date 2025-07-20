import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecurrProvider} from './context/RecurrContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecurrProvider>
       <App />
    </RecurrProvider> 
  </React.StrictMode>
);

