import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './landingpage/signup/SignUp';
import About from './landingpage/about/About';
import Products from './landingpage/products/Products';
import Pricing from './landingpage/home/Pricing';
import Support from './landingpage/support/Support';
import Navbars from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
);

