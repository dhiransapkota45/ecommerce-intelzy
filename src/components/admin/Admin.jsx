import React, { useEffect } from "react";

const Admin = () => {
  const logouthandler = () => {
    localStorage.removeItem("token");
    location.href = "/login";
  };

  if (localStorage.getItem("token")) {
    return (
      <div>
        <button onClick={logouthandler}>logout</button>
        <h1>Admin Page</h1>
      </div>
    );
  } else {
    location.href = "/login";
  }
};

export default Admin;
