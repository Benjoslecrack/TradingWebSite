import React from "react";
import PaginationBootstrap from "react-bootstrap/Pagination";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <PaginationBootstrap className="d-flex justify-content-center">
        {pages.map((page, index) => {
          return (
            <PaginationBootstrap.Item
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </PaginationBootstrap.Item>
          );
        })}
      </PaginationBootstrap>
    </div>
  );
}
