import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ total, page = 1, url, perPage }) {
  // const items = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
  // const page = 1;
  // const url = 'localhost:5173?page='
  // const perPage = 5;
  page = Number(page) == 0 ? page + 1 : Number(page);

  const lastPage = Math.ceil(total / perPage);
  // console.log('total', total)
  // console.log('lastPage', lastPage)
  // const lastPage = Math.ceil(items.length / perPage);
  const n = 2;

  const startFrom = (number) => {
    let val = [];
    for (let i = 0; i < n + 1; i++) {
      val.push(
        <li key={i}>
          <Link to={url + (number + i)}>{number + i}</Link>
        </li>
      );
    }
    return <>{...val}</>;
  };

  const next = () => {
    return (
      <li>
        <Link
          className={page + 1 <= lastPage ? "" : "inactive"}
          to={url + (page + 1)}
        >
          Next
        </Link>
      </li>
    );
  };
  const prev = () => {
    return (
      <li>
        <Link className={page - 2 < 1 ? "inactive" : ""} to={url + (page - 1)}>
          Prev
        </Link>
      </li>
    );
  };
  const middle = () => {
    return (
      <>
        {page == 1 && startFrom(page)}
        {page > 1 && page != lastPage && startFrom(page - 1)}
        {page == lastPage && startFrom(page - n)}
      </>
    );
  };

  return (
    total > 1 && (
      <ul className="pagination">
        {next()}
        {middle()}
        {prev()}
      </ul>
    )
  );
}

// next should be enabled when page + 1 != lastPage

// if page == 1 count forward 2 times
// if page > 1 start counting from page -1
// if page == lastPage count from - 2 of page

// previous button should be enabled when page is greater than one

/// next 1 2 3 prev
/// next 2 3 4 prev
/// next 4 5 6 prev
/// next 5 6 7 prev
