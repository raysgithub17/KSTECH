import React from "react";
import { ReactDOM } from "react";
import { Routes,Route } from "react-router-dom";
import App from "./App";
import Dummy from "./dummy";
import SignIn1 from "./sign1";
import SignIn2 from "./SignIn2";
import SignIn3 from "./SignIn3";
import PhoneColumn from "./PhoneColumn";
import LapColumn from "./LapColumn";
export default function Router(){
   return(
    <Routes>
    <Route exact path="/"  element={<App />}>
    <Route path='/signin' element={<SignIn1/>}/>
    <Route path='/signin2' element={<SignIn2/>}/>
    <Route path='/signin3' element={<SignIn3/>}/>
    <Route path='/phone' element={<PhoneColumn/>}/>
    <Route path='/laptop' element={<LapColumn/>}/>
    
    </Route>
    </Routes>
   ) 
}