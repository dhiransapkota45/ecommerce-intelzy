import React, { useEffect, useState } from "react";
import "./product.css";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  console.log(products)
  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/products");

    const data = await response.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className=" flex gap-3 flex-wrap">
        {products.map((item, index) => {
          return <ProductCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default Product;
