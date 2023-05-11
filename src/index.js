import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import HomeApp from './component/home/homeHTML';
import ListApp from './component/sitterList/sitterListHTML';
import ProApp from './component/profile/profileHTML';
import SignInApp from './component/sign/signInHTML';
// import SignUpApp from './component/signIn&signUp/signUpHTML';
import SignUpForm from './component/sign/signUp';
import Shop from './component/shop/shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeApp/>}/>
      <Route path='/list' element={<ListApp/>}/>
      <Route path="/profile" element={<ProApp/>}/>
      <Route path="/signIn" element={<SignInApp/>}/>
      {/* <Route path="/signUp" element={<SignUpApp/>}/> */}
      <Route path="/signUp" element={<SignUpForm/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
  </BrowserRouter>
);

