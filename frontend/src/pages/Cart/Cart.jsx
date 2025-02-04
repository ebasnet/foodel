import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Create from "../../components/create/Create";
import "./Cart.css";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("posts");

    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      axiosInstance
        .get("/posts")
        .then((res) => {
          setData(res.data);
          localStorage.setItem("posts", JSON.stringify(res.data)); // Save fetched data to localStorage
        })
        .catch((error) => {
          console.log("Error fetching posts:", error);
        });
    }
  }, []);

  const handlePostCreated = (newPost) => {
    const updatedData = [newPost, ...data];
    setData(updatedData);

    localStorage.setItem("posts", JSON.stringify(updatedData));
  };

  const handleDeletePost = (id) => {
    const updatedData = data.filter((post) => post.id !== id);
    setData(updatedData);

    localStorage.setItem("posts", JSON.stringify(updatedData));
  };

  return (
    <div className="cart-container">
      <h1>Add your favorites!</h1>
      <br />
      <Create onPostCreated={handlePostCreated} />

      {data.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="post-container" key={id}>
            <button
              className="delete-button"
              onClick={() => handleDeletePost(id)}
            >
              DELETE
            </button>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
