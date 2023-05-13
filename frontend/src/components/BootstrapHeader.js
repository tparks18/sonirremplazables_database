import React from 'react'
import picture from "../images/logo.png";
import "../styles/main.css";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



function BootstrapHeader() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    console.log('Logout')
  }

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

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userInfo ? userInfo.name : "Admin"}
              </a>

              <ul class="dropdown-menu">
                {userInfo ? (
                  <>
                    <li>
                      <Link to="/profile" class="dropdown-item" href="/">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" onclick={logoutHandler} href="/">
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login" class="dropdown-item" href="/">
                      Acceder
                    </Link>
                  </li>
                )}
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold ms-1" to="/">
                Base de Datos
                <i className="fa-solid fa-folder-open ms-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default BootstrapHeader