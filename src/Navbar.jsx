import React from "react";
import ReactDOM from 'react-dom/client'
import { Outlet, Link } from "react-router-dom";
import Router from "./Route";
export default function Navbar(){
    return(
        <header>
              <nav className="nav">
                    <Link to="/"><img src="logo.png" className="nav-logo"/></Link>
                    <h1 className="nav-mobile"><Link to="/phone">Mobile</Link></h1>
                    <h2 className="nav-laptop"><Link to="/laptop">Laptop</Link></h2>
                    <h2 className="nav-profilelogo"><i className="fa-solid fa-user"></i></h2>
                    <h2 className="nav-profile">Profile</h2>
                    <h2 className="nav-login"><Link to="/signin">Login</Link></h2>
              </nav>
              <Outlet/>
          </header>
    )
}
