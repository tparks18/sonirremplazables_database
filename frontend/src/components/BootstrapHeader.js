import React from "react";
import picture from "../images/logo.png";
import "../styles/main.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

function BootstrapHeader() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

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
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userInfo ? userInfo.email : "Admin"}
              </a>

              <ul className="dropdown-menu">
                {userInfo ? (
                  <>
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={logoutHandler}
                        href="/"
                      >
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login" className="dropdown-item">
                      Acceder
                    </Link>
                  </li>
                )}

                {userInfo && userInfo.isAdmin && (
                  <>
                    <li>
                      <Link to="/admin/userlist" className="dropdown-item">
                        User List
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/peoplelist" className="dropdown-item">
                        People
                      </Link>
                    </li>
                  </>
                )}

                {!userInfo ? (
                  <>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item">
                        Register
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link ms-1" to="/">
                Base de Datos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default BootstrapHeader;
