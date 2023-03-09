import React from 'react';
import CartWidget from '../CartWidget';
import './navBar.css'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src="" alt="" />
    <a className="navbar-brand" href="#">
        <img className="logo" src="Apple-Grey-Logo-PNG-Free-Download.png" alt="Mi imagen" />
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">iPhone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MacBook</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">iPad</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link lg " href="#" tabindex="-1" aria-disabled="true">
            <CartWidget/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default NavBar;
