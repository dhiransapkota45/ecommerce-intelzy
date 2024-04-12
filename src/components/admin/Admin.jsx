import React, { useEffect, useState } from "react";
import AdminProductRow from "./AdminProductRow";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [productdata, setProductdata] = useState([]);

  const fetchproducts = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    setProductdata(data);
  };

  const logouthandler = () => {
    localStorage.removeItem("token");
    location.href = "/login";
  }
  useEffect(() => {
    fetchproducts();
  }, []);
  if (localStorage.getItem("token")) {
    return (
      <div>
        <button onClick={logouthandler}>logout</button>
        <NavLink to="/admin/add">Add product</NavLink>
        <table>
          <thead className=" border">
            <th>sn.</th>
            <th>image</th>
            <th>name</th>
            <th>category</th>
            <th>price</th>
            <th>action</th>
          </thead>
          <tbody>
            {productdata.map((product, index) => {
              return (
                <AdminProductRow
                  fetchproducts={fetchproducts}
                  index={index}
                  product={product}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }else{
    location.href = "/login";
  }
};

export default Admin;
