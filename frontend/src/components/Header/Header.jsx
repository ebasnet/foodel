import styles from "./header.module.css"; // Import the CSS Module

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContents}>
        <h1 className={styles.headerTitle}>Order your Favourite food Here</h1>
        <p className={styles.headerText}>
          Choose from diverse menu. Fill your appetite.
        </p>
        <a href="#explore-menu">
          <button className={styles.headerButton}>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
