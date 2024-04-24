import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RepositoryList from "../components/RepositoryList";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [perPage, _] = useState(5);
  // const [page, setPage] = useState(1);
  const sQuery = new URLSearchParams(useLocation().search);

  const handleClick = () => {
    // console.log('button clicked')
    setQuery(search);
  };

  return (
    <div style={{ margin: "0 100px" }}>
      <h1 style={{ textAlign: "center" }}>GITHUB PORTFOLIO</h1>
      <div style={{ marginBottom: "6rem", display: "flex" }}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "2.5rem" }}>
        <div style={{ width: "50%" }}>
          <RepositoryList
            search={query}
            setTotal={setTotal}
            page={sQuery.get("page") || 1}
            perPage={perPage}
          />
        </div>
        <div style={{ width: "50%", padding: "0 20px", position: "sticky" }}>
          <Outlet />
        </div>
      </div>
      {/* pagination */}
      <div>
        <Pagination
          total={total}
          page={sQuery.get("page")}
          url="/?page="
          perPage={perPage}
        />
      </div>
    </div>
  );
}
