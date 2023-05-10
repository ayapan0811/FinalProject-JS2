import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import HomeApp from './component/home/homeHTML';
import ListApp from './component/sitterList/sitterListHTML';
import ProApp from './component/profile/profileHTML';
import SignInApp from './component/signIn&signUp/signInHTML';
import SignUpApp from './component/signIn&signUp/signUpHTML';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path='/jsonfile' element={<SitterListTestApp/>}/> */}
      <Route path='/' element={<HomeApp/>}/>
      <Route path='/list' element={<ListApp/>}/>
      <Route path="/profile" element={<ProApp/>}/>
      <Route path="/signIn" element={<SignInApp/>}/>
      <Route path="/signUp" element={<SignUpApp/>}/>
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
