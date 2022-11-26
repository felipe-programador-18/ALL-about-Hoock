import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AddProvideContext } from './hoock/context';
import { TitleProvider } from './hoock/color';
import { ManageAll } from './hoock/anotherContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AddProvideContext>
  <TitleProvider >
  <ManageAll>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </ManageAll> 
  </TitleProvider>
  
  </AddProvideContext>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
