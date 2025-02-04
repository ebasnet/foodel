const Contact = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Contact Us</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#f76c6c",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
