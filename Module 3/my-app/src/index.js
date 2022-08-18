import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
// jsx name
// root.render(<p> Thanh Binh </p>);

// list of fruits
const fruits = ['apple', 'banana', 'orange', 'apricot', 'black rowan', 'cranberry'];
const fruitElement = (
    <div className='container'>
        <h1>List of fruits</h1>
        <ul>
            {
                fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
            }

        </ul>
    </div>
);

// time - learn demo


const tick = () => {
    const now = new Date();
    console.log(now);
    root.render(
        <div className='container'>
            <h1>Hello, world!</h1>
            <p>It is {now.toLocaleTimeString()}</p>
        </div>
    );
}

setInterval(tick, 1000)








// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
