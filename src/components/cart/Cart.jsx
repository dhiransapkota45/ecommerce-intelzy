import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);

  const fetchCartdata = async () => {
    const response = await fetch("http://localhost:5000/carts");
    const data = await response.json();
    setCartdata(data);
  };

  useEffect(() => {
    fetchCartdata();
  }, []);
  return (
    <div>
      {cartdata.length === 0 ? (
        <div>no items in the cart</div>
      ) : (
        cartdata.map((item) => {
          return <CartCard fetchCartdata={fetchCartdata} data={item} />;
        })
      )}
    </div>
  );
};

export default Cart;
