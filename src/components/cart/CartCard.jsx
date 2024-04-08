import React from "react";

const CartCard = (props) => {
  const addtocart = async () => {
    console.log(props.data);
    console.log("clicked");

    const response = await fetch(
      `http://localhost:5000/carts/${props.data.id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log(data);
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
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
