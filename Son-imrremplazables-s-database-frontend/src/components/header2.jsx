import React from "react";
import { ReactDOM } from "react";
import { Navbar } from "react-bootstrap";
import picture from '../../assets/Img/logo.png'





export default function NavbarP(){

    return <>
       <header className="nav-container">
      <section className="brand">
        <div className="logo margin">
          <img src= {picture} alt="Logo" />
        </div>

        <h2>Son inrremplazables</h2>
      </section>

      <nav className="nav nav-header">
          <a href="#">Home</a>
          <a href="#">Base de datos</a>
          <a href="#">Sign in </a>
        </nav>
    </header>


 <h3 className="section-title">Base de datos</h3>
    
    
    
    </>


};