import React from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PaginateAdmin({ pages, page, keyword = "" }) {
  const navigate = useNavigate();

  const changePage = (pageNum) => {
    navigate(
      keyword
        ? `/admin/personlist/?keyword=${keyword}&page=${pageNum}`
        : `/admin/personlist/?page=${pageNum}`
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

export default PaginateAdmin;
