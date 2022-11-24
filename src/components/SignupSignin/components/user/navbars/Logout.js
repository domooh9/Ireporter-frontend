import React from "react";
import "./side.css";
import {Link} from "react-router-dom"

function Logout() {
  return (
  <div>
    <Link to="/" className="logout"> Logout </Link>
  </div>
  
  );
}

export default Logout;
