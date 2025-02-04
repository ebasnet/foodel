import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Import axiosInstance instead of axios
import "./Create.css";

const Create = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Using axiosInstance to make the POST request
    axiosInstance
      .post("/posts", { title, body })
      .then((res) => {
        onPostCreated(res.data); // Notify parent component with the new post data
        setTitle(""); // Clear title input
        setBody(""); // Clear body input
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h2>Create a New Post</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="textarea-field"
        />
      </div>
      <button type="submit" className="submit-button">
        Create Post
      </button>
    </form>
  );
};

export default Create;
