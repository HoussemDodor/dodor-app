import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Unauthorized;
