import React from "react";
import {Link} from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="page__content">
      <h1>😢</h1>
      <Link to="/home">Go home</Link>
    </div>
  );
};

export default PageNotFound;
