import React from 'react'
import picture from "../assets/images/logo.png";
import "../styles/main.css";



function BootstrapHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand fs-4 text fw-semibold" href="/">
            <span className="me-2">
              <img src={picture} alt="Bootstrap" width="50" height="50" />
            </span>
            Son Irremplazables
          </a>

          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-semibold" aria-current="page" href="/">
                Home
                <i className="fa-solid fa-house ms-1"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold ms-1" href="/">
                Base de datos
                <i className="fa-solid fa-folder-open ms-1"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/">
                Acceder
                <i className="fa-solid fa-right-to-bracket ms-1"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h3 className="section-title mt-3">Base de datos</h3>
      <div className="main-title-container">
        <h1 className="main-title">Personas desaparecidas en RD 🇩🇴</h1>
      </div>
    </>
  );
}

export default BootstrapHeader