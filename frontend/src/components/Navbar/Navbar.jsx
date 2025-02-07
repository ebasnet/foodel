import { asset } from "../../assets/assets"; // Assuming assets.js contains your image paths
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = ({ setShowLogin, setShowInput }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <img
        src={asset.logo}
        alt="Logo"
        className={styles.logo}
        onClick={() => navigate("/")}
      />

      {/* Navbar Menu with Links */}
      <ul className={styles.navbarMenu}>
        <li>
          <a href="#explore-menu">Menu</a>
        </li>
        <li>
          <Link to="/mobile-app" className={styles.navbarLink}>
            Mobile App
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navbarLink}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className={styles.navbarRight}>
        <img
          src={asset.search}
          alt="Search Icon"
          className={styles.navbarSearchIcon}
          onClick={() => navigate("/search")}
        />
        <img
          src={asset.cart}
          alt="Cart Icon"
          className={styles.navbarCartIcon}
          onClick={() => navigate("/cart")}
        />
        <button onClick={() => setShowLogin(true)} className={styles.button}>
          Sign-in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
