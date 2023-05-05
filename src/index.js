import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
// import './scss/style.scss';
// import App from './App';
import SitterListTestApp from './component/sitterTestHTML';
import ProApp from './component/profileMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path='/jsonfile' element={<SitterListTestApp/>}/> */}
      <Route path='/sitterlisttest' element={<SitterListTestApp/>}/>
      <Route path="/profile" element={<ProApp/>}/>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
