import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBarAdmin() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/admin/personlist/?keyword=${keyword}&page=1`);
    } else {
      navigate("/admin/personlist");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="q"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <button type="submit" className="btn btn-outline-success fw-semibold">
            Buscar
            <i className="fa-solid fa-magnifying-glass ms-1"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBarAdmin;
