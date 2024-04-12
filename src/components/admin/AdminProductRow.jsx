import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const AdminProductRow = ({ product, index, fetchproducts }) => {
    const deletehandler = async() => {
        const response = await fetch(`http://localhost:5000/products/${product.id}`, {
            method : "DELETE",
        })

        const data = await response.json();
        if(data){
            toast.success("Product deleted successfully");
            // fetchproducts();
        }

    }


  return (
    <tr key={product.id}>
      <td>{index + 1}</td>
      <td>
        <img
          src={product.thumbnail}
          alt={product.title}
          width="50"
          height="50"
        />
      </td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td className=" flex">
        <div>
        <NavLink to={`/admin/edit/${product.id}/`} >edit</NavLink>
        </div>
        <button onClick={deletehandler}>delete</button>
      </td>
    </tr>
  );
};

export default AdminProductRow;
