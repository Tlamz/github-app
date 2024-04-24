import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRepo } from "../scripts/github.script";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const [details, setDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const result = await getRepo(params.id);
      setDetails(result);
    })();
  }, [params.id]);

  return (
    <div className="detailsPage">
      {/* <h1 className="detailsPage">Details Page</h1> */}
      <p className="goHome">
        <Link to="/">Go Home</Link>
      </p>

      {/* {details && Object.keys(details).map((key, i) => <p key={i}><b>{key.toUpperCase()}</b>: {
        typeof details[key] === 'object' ? JSON.stringify(details[key]) : details[key] }</p>)} */}
      {/* {details && Object.keys(details).map((key, i) => <p key={i}> {details[key]}</p>)} */}

      {details && (
        <>
          <p className="detailsItems">
            <b>NAME</b>: {details.name}
          </p>
          <p className="detailsItems">
            <b>NODE ID</b>: {details.node_id}
          </p>
          <p className="detailsItems">
            <b>FULL NAME</b>: {details.full_name}
          </p>
          <p className="detailsItems">
            <b>PRIVATE REPO</b>: {details.private ? "Yes" : "No"}
          </p>
          <p className="detailsItems">
            <b>ARCHIVED</b>: {details.archived ? "Yes" : "No"}
          </p>
          <p className="detailsItems">
            <b>OPEN ISSUES</b>: {details.open_issues}
          </p>
          <p className="detailsItems">
            <b>LANGUAGE</b>: {details.language}
          </p>
          <p className="detailsItems">
            <b>FORKS</b>: {details.forks}
          </p>
          <p className="detailsItems">
            <b>CREATED AT</b>: {details.created_at}
          </p>
          <p className="detailsItems">
            <b>PUSHED AT</b>: {details.pushed_at}
          </p>
          <p className="detailsItems">
            <b>DEFAULT BRANCH</b>: {details.default_branch}
          </p>
          <p className="detailsItems">
            <b>SIZE</b>: {details.size}
          </p>
        </>
      )}
      <p className="goHome">
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}
