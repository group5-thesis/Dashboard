import React, { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import Search from "./Search";
const DataTable = ({
  data ,
  headers = [],
  enableSearch = true,
  showAll = false,
  paginate = true,
  actions,
  title,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState({ key: "", field: [] });
  const [computedData, setComputedData] = useState(data);
  const ITEMS_PER_PAGE = 10;
  const onSearch = (value) => {
    setSearch(value);
  }
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">
        {(function () {
          if (enableSearch) {
            return (
              <Search
                onSearch={onSearch
                } />
            );
          }
        })()}
        <div className="content">
          <Table
            {...{
              data,
              headers,
              currentPage,
              search,
              actions,
              itemsPerPage: showAll ? data.length : 10,
            }}
          />
        </div>
      </div>
      {(function () {
        if (paginate) {
          return (
            <footer className="card-footer">
              <div className="card-footer-item">
                {/* pagination part */}
                <Pagination
                  total={computedData.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </footer>
          );
        }
      })()}
    </div>
  );
};

export default DataTable;
