import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SignIn1 from './sign1'
import SignIn2 from './SignIn2'
import SignIn3 from './SignIn3'
import { Outlet, Link } from "react-router-dom";
import Router from './Route'
import { BrowserRouter,Routes,Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
) 
