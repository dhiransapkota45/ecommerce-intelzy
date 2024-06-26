import React from "react";
import toast from "react-hot-toast";

const ProductCard = (props) => {
  const addtocart = async () => {
    try {
      const response = await fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.data),
      });

      const data = await response.json();
      if (data) {
        toast.success("Added to cart");
      }
    } catch (error) {
      toast.error("Error adding to cart");
    }

  };
  return (
    <div className=" shadow w-80 border">
      <div>
        <img className=" h-60" src={props.data.thumbnail} />
      </div>

      <div className=" p-3">
        <div> {props.data.title} </div>
        <div>${props.data.price}</div>
        <div>category: {props.data.category}</div>

        <button
          onClick={addtocart}
          className=" px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
