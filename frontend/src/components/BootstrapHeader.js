import React from 'react'
import picture from "../images/logo.png";
import "../styles/main.css";
import { Link } from 'react-router-dom'



function BootstrapHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 text fw-semibold" to="/">
            <span className="me-2">
              <img src={picture} alt="Bootstrap" width="50" height="50" />
            </span>
            Son Irremplazables
          </Link>

          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" aria-current="page" to="/">
                Home
                <i className="fa-solid fa-house ms-1"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold ms-1" to="/">
                Base de Datos
                <i className="fa-solid fa-folder-open ms-1"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/login">
                Acceder
                <i className="fa-solid fa-right-to-bracket ms-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
}

export default BootstrapHeader