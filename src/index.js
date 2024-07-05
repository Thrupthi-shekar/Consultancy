import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
// import {reportWebVitals} from 'web-vitals';
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

const reportMetrics = () => {
  return {
    CLS: getCLS(),
    FCP: getFCP(),
    FID: getFID(),
    LCP: getLCP(),
    TTFB: getTTFB(),
  };
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// export default metrics;
export default reportMetrics;