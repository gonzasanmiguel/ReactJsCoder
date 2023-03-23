
import React from "react";
import CartWidget from "../CartWidget";
import "./navBar.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="" alt="" />
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src="Apple-Grey-Logo-PNG-Free-Download.png"
            alt="Mi imagen"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" exact>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/iPhone">
                iPhone
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/MacBook">
                MacBook
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/iPad">
                iPad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Accesorios">
                Accesorios
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Link className="nav-link carrito" to="/cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
