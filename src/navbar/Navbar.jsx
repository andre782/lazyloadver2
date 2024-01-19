import React from "react";
import "../App.css";
import Logoo from "../assets/cargo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logoo} alt="" />
      <h1>crates.io</h1>
     

      <div className="search-container">
        <form action="/action_page.php">
          <input
            className="conten-search"
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="jarak">
        <h4>Browse All Crates</h4>
        <p>|</p>
        <h3>Login</h3>
      </div>
    </div>
  );
};

export default Navbar;
