import React from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  const navigate = useNavigate();

  const changePage = (pageNum) => {
    navigate(
      !isAdmin
        ? `/?keyword=${keyword}&page=${pageNum}`
        : `/admin/personlist/?keyword=${keyword}&page=${pageNum}`
    );
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            onClick={() => changePage(x + 1)}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;

