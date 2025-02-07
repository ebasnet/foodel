import { asset } from "../../assets/assets";
import styles from "./FoodItem.module.css";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className={styles["food-item"]}>
      <div className={styles["food-item-img-container"]}>
        <img className={styles["food-item-image"]} src={image} alt={name} />
      </div>
      <div className={styles["food-item-info"]}>
        <div className={styles["food-item-name-rating"]}>
          <p>{name}</p>
          <img src="" alt="rating" />
        </div>
        <p className={styles["food-item-desc"]}>{description}</p>
        <p className={styles["food-item-price"]}>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
