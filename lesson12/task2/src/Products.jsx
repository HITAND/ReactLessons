import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Product from "./Product.jsx";

const Products = () => {
  return (
    <Route>
      {({ match }) => (
        <div className="page__content">
          <h1>Products</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to={`${match.url}/book`}>Book</Link>
            </li>
            <li className="navigation__item">
              <Link to={`${match.url}/ball`}>Ball</Link>
            </li>
          </ul>
          <Routes>
            <Route
              path={match.path}
              element={<span>Select a product please</span>}
            />
            <Route path={`${match.path}/:productId`} element={<Product />} />
          </Routes>
        </div>
      )}
    </Route>
  );
};

export default Products;
