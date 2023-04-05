import React from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">


            <p className="navbar-brand logo">
              <span>P</span>ort
              <span>f</span>olio.
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav menu">

                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/About">About</NavLink>
                <NavLink className="nav-link" to="/Projects">Projects</NavLink>
                <NavLink className="nav-link " to="/Contact"> Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
