import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Editproduct = () => {
  const params = useParams();
  
  const fetchproduct = async () => {
    const response = await fetch(`http://localhost:5000/products/${params.id}`);
    const data = await response.json();
    if (data) {
      setProductdata({
        productname: data.title,
        category: data.category,
        productprice: data.price,
        productimage: data.thumbnail,
      });
    }
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  const logouthandler = () => {
    localStorage.removeItem("token");
    location.href = "/login";
  };

  const [productdata, setProductdata] = useState({
    productname: "",
    category: "",
    productprice: "",
    productimage: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (
      productdata.productname === "" ||
      productdata.category === "" ||
      productdata.productprice === "" ||
      productdata.productimage === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    } else {
      const response = await fetch(`http://localhost:5000/products/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: productdata.productname,
          category: productdata.category,
          price: productdata.productprice,
          thumbnail: productdata.productimage,
        }),
      });

      const data = await response.json();
      if (data) {
        toast.success("Product added successfully");
      }
    }
  };
  if (localStorage.getItem("token")) {
    return (
      <div>
        <button onClick={logouthandler}>logout</button>
        <h1>Admin Page</h1>

        <div>Add Product</div>

        <form onSubmit={handlesubmit} className=" flex flex-col gap-3">
          <div>
            <input
              onChange={(e) => {
                setProductdata({ ...productdata, productname: e.target.value });
              }}
              value={productdata.productname}
              className=" p-2 border  rounded-md"
              type="text"
              placeholder="enter product name"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setProductdata({
                  ...productdata,
                  category: e.target.value,
                });
              }}
              value={productdata.category}
              className=" p-2 border rounded-md"
              type="text"
              placeholder="enter product category"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setProductdata({
                  ...productdata,
                  productprice: e.target.value,
                });
              }}
              value={productdata.productprice}
              className=" p-2 border rounded-md"
              type="number"
              placeholder="enter product price"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setProductdata({
                  ...productdata,
                  productimage: e.target.value,
                });
              }}
              value={productdata.productimage}
              className=" p-2 border rounded-md"
              type="text"
              placeholder="enter image url"
            />
          </div>

          <button
            type="submit"
            className=" px-5 py-2 rounded-md bg-red-600 w-fit text-white"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    location.href = "/login";
  }
};

export default Editproduct;
