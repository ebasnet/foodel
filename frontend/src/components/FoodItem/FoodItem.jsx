import PropTypes from "prop-types"; // Import PropTypes
import styles from "./FoodItem.module.css"; // Import CSS Module
import { asset } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/storecontext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItemImgContainer}>
        <img className={styles.foodItemImg} src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={asset.addIconWhite}
            alt=""
          />
        ) : (
          <div className={styles.foodItemCounter}>
            <img
              className={styles.foodItemImgContainerAdd}
              src={asset.removeIcon}
              alt=""
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img src={asset.addIcon} alt="" onClick={() => addToCart(id)} />
          </div>
        )}
      </div>

      <div className={styles.foodItemInfo}>
        <div className={styles.foodItemNameRating}>
          <p>{name}</p>
          <img src={asset.ratingImg} alt="rating" />
        </div>
        <p className={styles.foodItemDesc}>{description}</p>
        <p className={styles.foodItemPrice}>${price}</p> {/* Display price */}
      </div>
    </div>
  );
};

// Define PropTypes to validate the props passed into the component
FoodItem.propTypes = {
  id: PropTypes.string.isRequired, // ID should be a string and is required
  name: PropTypes.string.isRequired, // Name should be a string and is required
  price: PropTypes.number.isRequired, // Price should be a number and is required
  description: PropTypes.string.isRequired, // Description should be a string and is required
  image: PropTypes.string.isRequired, // Image URL should be a string and is required
};

export default FoodItem;
