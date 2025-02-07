// src/components/ExploreMenu/ExploreMenu.js
import { useState } from "react";
import { menu_list } from "../../assets/assets";
import styles from "./ExploreMenu.module.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className={styles.exploreMenuContainer} id="explore-menu">
      <h1 className={styles.heading}>Explore Our Varieties</h1>
      <p className={styles.description}>
        Choose from a diverse menu. Fill your appetite!
      </p>

      {/* Horizontal Scrolling Menu */}
      <div className={styles.menuListContainer}>
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={styles.menuItem}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              className={`${styles.menuImage} ${
                category === item.menu_name ? styles.active : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <span className={styles.menuName}>{item.menu_name}</span>
          </div>
        ))}
      </div>

      {/* Apply custom scrollbar styles */}
      <div className={styles.menuListContainer} />
    </div>
  );
};

export default ExploreMenu;
