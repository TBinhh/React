import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserLog from './component/userLoginLogout';
import isExpend from './component/Expand-collapse';
import Calculator from './component/Calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UserLog />);
// root.render(<isExpand />);
root.render(<isExpend />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
