import React, { useEffect, useState } from "react";
import "./home.css";
import Product from "../product/Product";

const Home = () => {

  return (
    <div>
      <div className="heading">Our Top Selling Products</div>

    <Product />
    </div>
  );
};

export default Home;
