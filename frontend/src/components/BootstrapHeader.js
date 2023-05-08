import React from 'react'
import picture from "../assets/Img/logo.png";


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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Base de datos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h3 className="section-title mt-3">Base de datos</h3>
    </>
  );
}

export default BootstrapHeader