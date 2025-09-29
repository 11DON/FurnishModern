import { useState, useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "../pages/HomePage.module.css";
import { AuthContext } from "../components/AuthContext";
import { CartContext } from "../components/cartContext.jsx";
export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const {cart} = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="#" className={`navbar-brand ${styles.navbarBrand}`}>
          <img src={logo} alt="Logo" width="30" height="30" className="mx-2" />
          FurnishModern
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/collections"}>
                Collections
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/products"}>
                Products
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <button className={`nav-link ${styles.navItem}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer">
                <i className="bi bi-cart"></i> Cart ({cart.length})
              </button>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className="nav-link" to={"/aboutUs"}>
                About Us
              </Link>
            </li>
          </ul>

          <div className="d-flex ms-auto align-items-center gap-2">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={`${styles.searchInput} ${showSearch ? styles.searchInputShow : ""
                  } form-control me-2`}
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

            {user ? (
              <>
                <span className="mx-2">Hi, {user.name}</span>
                <button
                  className="btn btn-outline-danger"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline-dark">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
