import Navbar from "./components/Navbar/navbar"; // Importing the navbar component
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar /> {/* Use the navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
