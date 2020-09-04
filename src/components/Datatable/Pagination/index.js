import React, { useEffect, useState, useMemo } from "react";
import Button from "components/Button";

const PaginationComponent = ({
  total = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [prev, setPrev] = useState(currentPage);
  useEffect(() => {
    if (total > 0 && itemsPerPage > 0) {
      setTotalPages(Math.ceil(total / itemsPerPage));
    }
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = prev; i <= prev + 4; i++) {
      if (i <= totalPages) {
        pages.push(
          <Button
            label={i}
            key={"btn." + (i + currentPage)}
            variant={{
              type: ` pagination-link button  mr-1`,
              color: i === currentPage ? "primary" : "",
              textColor: i === currentPage ? "white" : "black",
            }}
            {...{
              onClick: () => {
                onPageChange(i);
              },
            }}
          />
        );
      }
    }
    return pages;
  }, [currentPage, onPageChange, prev, totalPages]);

  function handleChangePage(type) {
    switch (type) {
      case "increment":
        if ((prev + currentPage - 1) % 5 === 0) {
          setPrev(prev + currentPage);
        }
        break;
      case "decrement":
        if ((prev - currentPage) % 5 === 0) {
          setPrev(prev - currentPage + 1);
        }
        break;

      default:
        break;
    }
  }
  if (totalPages === 0) return null;

  return (
    <nav className="pagination is-centered  is-small">
       <div className="pagination-list">{paginationItems}</div>
      <button
        className="pagination-previous"
        onClick={() => {
          onPageChange(currentPage - 1);
          handleChangePage("decrement");
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="pagination-next"
        onClick={() => {
          onPageChange(currentPage + 1);
          handleChangePage("increment");
        }}
        disabled={currentPage === totalPages}
      >
        Next page
      </button>
    </nav>
  );
};

export default PaginationComponent;
