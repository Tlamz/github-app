import React from "react";
import { Link } from "react-router-dom";

export default function RepositoryDetails({
  prop: {
    name,
    id,
    html_url,
    owner,
    watchers_count,
    forks_count,
    open_issues_count,
  },
  page,
}) {
  const query = page ? `?page=${page}` : "";
  return (
    <div
      className="repo-details"
      style={{
        border: "1px solid #eee",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "10px",
      }}
    >
      <h3>PROJECT: {name}</h3>
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <img
            src={owner.avatar_url}
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ paddingLeft: "20px" }}>
          {/* <p>Watchers: {watchers_count}, Forks: {forks_count}, Issues: {open_issues_count}</p> */}
          <p>
            <a href={html_url}>External Link to repo</a>
          </p>
          <Link to={`/details/${id}${query}`}>View</Link>
        </div>
      </div>
    </div>
  );
}
