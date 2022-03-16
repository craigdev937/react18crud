import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar">
        <h2 className="logo">LOGO</h2>
        <ul className="navbar__ul">
            <Link className="navbar__link" to="/">List</Link>
            <Link className="navbar__link" to="/add">Add</Link>
        </ul>
    </nav>
);



