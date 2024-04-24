import React, { useState, useEffect } from "react";
import RepositoryDetails from "./RepositoryDetails";
import { getAllRepos } from "../scripts/github.script";

export default function RepositoryList({
  search,
  setTotal,
  page = 1,
  perPage,
}) {
  page = Number(page);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await getAllRepos();
      // console.log('search', search);
      // filter and find all repo that matches search
      if (search) {
        result = result.filter((el) =>
          el.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      // perPage 5
      // page 1 = 1 - 5
      // page 2 = 6 - 10
      // page 3 = 11 - 15

      // page 1 = (page - 1 * 5) - (5 * page)
      // page 2 = (page - 1 * 5) - (5 * page)
      // array splicing
      setTotal(result.length);
      const start = (page - 1) * perPage;
      const end = perPage * page;
      // console.log( { start, end });
      result = result.slice(start, end);
      setRepositories(result);
    })();
  }, [search, page]);

  return (
    <div>
      {repositories &&
        repositories.map((repo) => (
          <RepositoryDetails key={repo.id} prop={repo} page={page} />
        ))}
    </div>
  );
}
