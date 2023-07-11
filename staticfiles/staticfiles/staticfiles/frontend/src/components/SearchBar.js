import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

  const navigate = useNavigate()

  const [keyword, setKeyword] = useState('')

const submitHandler = (e) => {
  e.preventDefault();
  if (keyword) {
    navigate(`/?keyword=${keyword}&page=1`);
  } else {
    navigate("/");
  }
};

  return (
    <>
    <form onSubmit={submitHandler}>
        <div className="input-group mb-3">
          <input
            type="text"
            name='q'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <button type='submit' className="btn btn-outline-success fw-semibold">
            Buscar
            <i className="fa-solid fa-magnifying-glass ms-1"></i>
          </button>
          {/* <button
            className="btn btn-outline-danger dropdown-toggle fw-semibold"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </li>
          </ul> */}
        </div>

    </form>
    </>
  );
}

export default SearchBar