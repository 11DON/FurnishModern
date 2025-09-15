import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styles from '../pages/HomePage.module.css';

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="#" className={`navbar-brand ${styles.navbarBrand}`}>
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="mx-2"
          />{" "}
          FurnishModern
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className="nav-link" href="#">Collections</a>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/products"}>Products</Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/aboutUs"}>About Us</Link>
            </li>
          </ul>

          <div className="d-flex ms-auto align-items-center gap-2">
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                className={`${styles.searchInput} ${showSearch ? styles.searchInputShow : ""} form-control me-2`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-dark ${styles.btnSearch}`}
                type="button"
                onClick={() => setShowSearch(!showSearch)}
              >
                {showSearch ? "Go" : <i className={`bi bi-search ${styles.btnSearchIcon}`}></i>}
              </button>
            </form>

            <button className="btn btn-outline-dark">login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
